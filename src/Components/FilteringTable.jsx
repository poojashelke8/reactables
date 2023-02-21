import React from 'react'
import { COLUMNS} from './Columns';
import Mock_Data from '../Components/MOCK_DATA.json';
import {useTable,useGlobalFilter,useFilters} from "react-table"
import './Basictablestyle.css'
import GlobalFilter from './GlobalFilter';

function FilteringTable() {
  
    const data=React.useMemo(()=>Mock_Data,[]);
    const columns = React.useMemo(()=>COLUMNS,[]);

    const {getTableProps,
            getTableBodyProps,
            prepareRow,rows,
            headerGroups,
            state,
            setGlobalFilter}=useTable({columns,data},useFilters,useGlobalFilter)

    const {globalFilter} = state

    // console.log(Mock_Data)
  return (
    <div >
    <h1>Basic Table</h1>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
    <div>
        <table {...getTableProps}>
            <thead >
                { headerGroups.map((headerGroup)=>(
                    <tr {...headerGroup.getFooterGroupProps()}>
                    {headerGroup.headers.map((columns)=>(
                        <th {...columns.getHeaderProps()}>
                            {columns.render("Header")}
                            <div>{columns.canFilter ? columns.render('Filter'):null}</div>
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

export default FilteringTable