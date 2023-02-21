import React from 'react'
import {COLUMNS } from './Columns';
import Mock_Data from '../Components/MOCK_DATA.json';
import {useTable,useColumnOrder} from "react-table"
import './Basictablestyle.css'

function ColumnOrder() {
  
    const data=React.useMemo(()=>Mock_Data,[]);
    const columns = React.useMemo(()=>COLUMNS,[]);

    const {getTableProps,
            getTableBodyProps,
            prepareRow,rows,
            headerGroups,setColumnOrder,allColumns,getToggleHideAllColumnsProps}=useTable({columns,data},useColumnOrder)

    // ------- passing array to show the column--------
    const changeOrder = () => {
        setColumnOrder(['id','first_name','last_name','phone','country','date_of_birth'])
    }
    // console.log(Mock_Data)
  return (
    <div >
    <h1>Basic Table</h1>
    
    <div>
    <button onClick={changeOrder}>Change Column Order</button>
        <table {...getTableProps}>
            <thead >
                { headerGroups.map((headerGroup)=>(
                    <tr {...headerGroup.getFooterGroupProps()}>
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
                                <td {...cell.getCellProps()}>{cell.render("Cell")}
                                    </td>
                            ))}
                        </tr>
                    )
                })}


            </tbody>
        </table>

    </div>
    </div>
  )
}

export default ColumnOrder