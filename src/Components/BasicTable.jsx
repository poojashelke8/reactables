import React from 'react'
import {COLUMNS} from './Columns';
import Mock_Data from '../Components/MOCK_DATA.json';
import {useTable} from "react-table"
import './Basictablestyle.css'
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function BasicTable() {
  
    const data=React.useMemo(()=>Mock_Data,[]);
    const columns = React.useMemo(()=>COLUMNS
            // {
            //     Header:'Id',
            //     accessor:'id'
            // },
            // {
            //     Header:'First Name',
            //     accessor:'first_name'
            // },
            // {
            //     Header:'Last Name',
            //     accessor:'last_name'
            // },
        
    ,[]);

    const {getTableProps,
            getTableBodyProps,
            prepareRow,rows,
            headerGroups}=useTable({columns,data})

    // console.log(Mock_Data)
  return (
    <div >
    <h1>Basic Table</h1>
    <div>
        <table {...getTableProps}>
            <thead >
                { headerGroups.map((headerGroup)=>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((columns)=>(
                        <th {...columns.getHeaderProps()}>
                            {columns.render("Header")}
                        </th>
                    ))}
                    </tr>
                ))}
            </thead>
                <tbody {...getTableBodyProps}>
                    {rows.map((row)=>{
                        prepareRow(row);
                        return(
                            <tr {...row.getRowProps()}>
                            {row.cells.map((cell)=>(
                                    <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                        
                                    <div className="action" style={{display: "flex"}}>
                                    <button>Edit</button>
                                    <button>delete</button>
                                    </div>
                                    </td>))}
                                    
                            </tr>
                        )
                    })}
                </tbody>
    
            
            
          
        </table>
       
        
    </div>
    </div>
  )
}

export default BasicTable