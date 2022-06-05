import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'
import { Button } from '@mui/material'
import { AgGridReact } from 'ag-grid-react'
import { useCallback, useMemo, useRef } from 'react'

export default function GuestGrid({ guests, columns }) {
    const gridRef = useRef()

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
                    columnDefs={columns}
                    animateRows={true}
                    defaultColDef={defaultColDef}
                    onFirstDataRendered={onDataFetched}
                    pagination={true}
                    paginationAutoPageSize={true}
                    // rowSelection='multiple'
                    // enableCellTextSelection={true}
                    // ensureDomOrder={true}
                    // onCellClicked={params => copyToClipboard(params.value)}
                ></AgGridReact>
            </div>
            <Button endIcon={<DownloadForOfflineIcon />} onClick={onBtnExport} size='small' variant='outlined'>
                Descargar
            </Button>
        </>
    )
}
