import React from 'react'
import {COLUMNS} from './Columns';
import Mock_Data from '../Components/MOCK_DATA.json';
import {useTable,usePagination} from "react-table"
import './Basictablestyle.css'

function PaginationTable() {
  
    const data=React.useMemo(()=>Mock_Data,[]);
    const columns = React.useMemo(()=>COLUMNS,[]);

    const {getTableProps,
            getTableBodyProps,
            prepareRow,rows,page,
            nextPage,previousPage,
            canNextPage,canPreviousPage,pageOptions,state,
            headerGroups,
            setPageSize}=useTable({columns,data},usePagination)

    const {pageIndex,pageSize} =state

    // console.log(Mock_Data)
  return (
    <div >
    <h1>Basic Table</h1>
    {/* ------Selecting how many rows you want to display------- */}
    
    <select value={pageSize} 
            onChange={(e)=>setPageSize(Number(e.target.value))}>
        {[5,10].map((pageSize)=>(
            <option key={pageSize} value={pageSize}>
                show{pageSize}
            </option>
            
        ))}

        
    </select>
    <div>
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
                {page.map((row)=>{
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
        <div>
            {/* -----Display number of pages  */}
            <span>
               Page{' '}
               <strong>
                {pageIndex+1} of {pageOptions.length}
                </strong> {'  '}
            </span>

            {/* ------Next and previous button to toggle/to show data of previous and next page---------- */}
            <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
            <button onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
        </div>

    </div>
    </div>
  )
}

export default PaginationTable