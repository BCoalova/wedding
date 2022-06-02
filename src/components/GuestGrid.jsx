import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'
import DraftsIcon from '@mui/icons-material/Drafts'
import EmailIcon from '@mui/icons-material/Email'
import { Button, IconButton, Tooltip } from '@mui/material'
import { AgGridReact } from 'ag-grid-react'
import { useCallback, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import convertTimeStampToDate from '../helpers/convertTimeStampToDate'

export default function GuestGrid({ guests }) {
    const gridRef = useRef()

    const columnDefs = useMemo(() => {
        return [
            {
                field: 'open',
                headerName: 'Leído',
                sortable: true,
                maxWidth: 100,
                resizable: false,
                cellRenderer: values => (
                    <Tooltip title='Ver en formularios' placement='right' arrow>
                        <IconButton component={Link} to='/admin' state={{ guestID: values.data.guestID }}>
                            {!values.value ? <EmailIcon color='primary' /> : <DraftsIcon />}
                        </IconButton>
                    </Tooltip>
                ),
            },
            {
                field: 'createdAt',
                headerName: 'Creado',
                sortable: true,
                width: 130,
                cellRenderer: values => convertTimeStampToDate(values.value) + ' hs.',
            },
            { field: 'name', headerName: 'Nombre', sortable: true, width: 130 },
            { field: 'lastName', headerName: 'Apellido', sortable: true, width: 150 },
            { field: 'age', headerName: 'Edad', sortable: true, width: 200 },
            { field: 'phone', headerName: 'Teléfono', sortable: true, width: 100 },
            { field: 'email', headerName: 'Email', sortable: true, width: 150 },
            { field: 'message', headerName: 'Mensaje', sortable: true },
        ]
    }, [])

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
