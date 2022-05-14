import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css';

export default function Traininglist() {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
    }

    const columns = [
        { headerName: 'Activity', field: 'activity', sortable: true, filter: true },
        { headerName: 'Date', field: 'date',  valueFormatter: (data) => {
            return data.value ? (new Date(data.value)).toLocaleDateString() : '';
       }, sortable: true, filter: true },
        { headerName: 'Duration (min)', field: 'duration', sortable: true, filter: true },   
        { headerName: 'Customer', valueGetter: (params) => { 
                    return params.data.customer.firstname + ' ' + params.data.customer.lastname }, 
                    sortable: true, filter: true }
    ] 

    return (
        <div>
            <h2>Exercises</h2>
            <div className="ag-theme-material"
                style={{
                    height: '700px', 
                    width: '95%', 
                    margin: 'auto',
                    }}
                    >
                <AgGridReact
                    columnDefs={columns}
                    rowData={trainings}>
                </AgGridReact>
            </div>
        </div>
    );
}