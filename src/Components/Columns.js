import { actions } from "react-table"
import ColumnFilter from "./ColumnFilter"

export const COLUMNS =[
    {
        Header:'Id',
        accessor:'id',
        Filter:ColumnFilter,
        disableFilters:true
    },
    {
        Header:'first Name',
        accessor:'first_name',
        Filter:ColumnFilter
    },
    {
        Header:'last Name',
        accessor:'last_name',
        Filter:ColumnFilter
    },
    {
        Header:'Date of Birth',
        accessor:'date_of_birth',
        Filter:ColumnFilter
    },
    {
        Header:'Country',
        accessor:'Country',
        Filter:ColumnFilter
    },
    {
        Header:'Phone',
        accessor:'Phone',
        Filter:ColumnFilter
    },
    {
        Header:'Action',
        // accessor:'Action',
        // Filter:ColumnFilter
    },
    
]

// ------------------Group the columns and display-------------

export const Grouped_data=[
    {
        Header:'Id',
        accessor:'id'
    },
    {
        Header:'Name',
        columns:[
        {
        Header:'first Name',
        accessor:'first_name'
        },
        {
        Header:'last Name',
        accessor:'last_name'
        },
        ]
    },
    {
        Header:'Info',
        columns:[
            {
                Header:'Date of Birth',
                accessor:'date_of_birth'
            },
            {
                Header:'Country',
                accessor:'Country'
            },
            {
                Header:'Phone',
                accessor:'Phone'
            },
        ]
    }
]