import React, { useState } from 'react'
import { Typography, Box } from '@mui/material';
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
} from '@mui/x-data-grid';

export default function StatisticsDetails({sensorId, MeasurementName, ReadingList}) {

    const [sensorGridRows, setSensorGridRows] = useState([]);
    const [preRender, setPrerender] = useState(0);

    function SensorDataGridToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport csvOptions={{ fileName: "Sensor " + sensorId + " Readings" }} />
            </GridToolbarContainer>
        );
    }

    if(preRender === 0){
    let list = [];
    let count = 1;
    // eslint-disable-next-line array-callback-return
    ReadingList.map(element=> {
        list.push({
            id: count, 
            Value: element.value, 
            Time: new Date(element.time_stamp).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit'})
        });
        count = count + 1;
    })
    setSensorGridRows(list);
    setPrerender(1);
    }

    const sensorGridColumns = [
        { field: 'id', headerName: 'Nr Crt', width: 80, height: 20 },
        { field: 'Value', headerName: 'Value', width: 160, height: 20 },
        { field: 'Time', headerName: 'Recorded At', width: 160, height: 20 }
    ];

  return (
    <Box>
         <Typography variant="h4"> Id Sensor: {sensorId} </Typography>
         <Typography variant="h5"> Measurement Type: {MeasurementName} </Typography>
            <Box mt={2} style={{
                height: '50%', width: '100%',
            }}>
                {preRender > 0 && <DataGrid
                    columns={sensorGridColumns}
                    rows={sensorGridRows}
                    density="compact"
                    slots={{
                        toolbar: SensorDataGridToolbar,
                    }}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 10 }, },
                    }}
                    pageSizeOptions={[5, 10]}
                    disableMultipleRowSelection={true}
                />
                }
            </Box>
        </Box>
  )
}
