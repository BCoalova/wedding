import { Button } from '@mui/material'
import { AgGridReact } from 'ag-grid-react'
import { useCallback, useMemo, useRef, useState } from 'react'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'
import copyToClipboard from '../helpers/copyToClipboard'
export default function GuestGrid({ guests }) {
    const gridRef = useRef()

    const [columnDefs] = useState([
        { field: 'name', headerName: 'Nombre', sortable: true, width: 100 },
        { field: 'lastName', headerName: 'Apellido', sortable: true, width: 100 },
        { field: 'age', headerName: 'Edad', sortable: true, width: 200 },
        { field: 'phone', headerName: 'Teléfono', sortable: true, width: 100 },
        { field: 'email', headerName: 'Email', sortable: true, width: 150 },
        { field: 'message', headerName: 'Mensaje', sortable: true },
    ])

    const defaultColDef = useMemo(() => {
        return {
            filter: true,
            resizable: true,
            minWidth: 100,
        }
    }, [])

    const onDataFetched = useCallback(params => {
        return gridRef.current.api.sizeColumnsToFit()
    }, [])

    const onBtnExport = useCallback(() => {
        gridRef.current.api.exportDataAsCsv()
    }, [])

    return (
        <>
            <div className='ag-theme-material' style={{ height: '65vh', width: '100%' }}>
                <AgGridReact
                    ref={gridRef}
                    rowData={guests}
                    columnDefs={columnDefs}
                    animateRows={true}
                    defaultColDef={defaultColDef}
                    onFirstDataRendered={onDataFetched}
                    pagination={true}
                    paginationAutoPageSize={true}
                    enableCellTextSelection={true}
                    ensureDomOrder={true}
                    // onCellClicked={params => copyToClipboard(params.value)}
                ></AgGridReact>
            </div>
            <Button endIcon={<DownloadForOfflineIcon />} onClick={onBtnExport} size='small' variant='outlined'>
                Descargar
            </Button>
        </>
    )
}
