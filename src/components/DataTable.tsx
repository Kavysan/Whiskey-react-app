import { useState } from 'react'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';
import { makeStyles } from '@mui/styles';

const columns: GridColDef[] = [
    { field: 'name', headerName: 'NAME', flex: 2 },
    { field: 'type', headerName: 'TYPE', flex: 2 },
    { field: 'age', headerName: 'AGE', flex: 2 },
    { field: 'region', headerName: 'REGION', flex: 2 },
];

const useStyles = makeStyles({
    root: {
      '& .MuiDataGrid-root': {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        color: 'black',

      },
    },
});

function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])
    const classes = useStyles();
  
    const handleOpen = () => {
      setOpen(true)
    }
  
    const handleClose = () => {
      setOpen(false)
    }
  
    const deleteData = () => {
      server_calls.delete(selectionModel[0]);
      getData();
      console.log(`Selection model: ${selectionModel}`)
      setTimeout( () => { window.location.reload() }, 1000)
    }  
  return (
    <>
    <Modal 
        id={selectionModel}
        open={open}
        onClose={handleClose}
    />
    <div className='flex flex-col items-center justify-center' style={{ paddingTop: '20%' }}>
        <div
        className={open ? 'hidden' : `${classes.root} container mx-auto my-5 flex flex-col`}
          style={{ height: 400, width: '80%' }}
          >
            <h2 className='p-3 font-bold text-white rounded w-full text-center text-2xl'>MY WHISKEY COLLECTION</h2>

            <DataGrid rows={contactData} columns={columns}
            checkboxSelection={true} 
            onRowSelectionModelChange={ (item:any) => {
              setSelectionModel(item)
            }}
            componentsProps={{
                pagination: {
                    rowsPerPageOptions: [5]
                }
            }}
            />
        </div>
        <div className='flex flex-row justify-center items-center ' >
          <button onClick={handleOpen} className='p-3 bg-richblack text-sky-100 m-3 rounded hover:bg-brownsugar hover:text-richblack' >Add your Drink</button>
          <button onClick={handleOpen} className='p-3 bg-richblack text-sky-100 m-3 rounded hover:bg-brownsugar hover:text-richblack'>Update</button>
          <button onClick={deleteData} className="p-3 bg-richblack text-sky-100 m-3 rounded hover:bg-brownsugar hover:text-richblack" >Delete</button>
        </div>
    </div>
</>
)
}

export default DataTable