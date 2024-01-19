import React, { useState, useEffect } from 'react'
import { Typography, Box } from '@mui/material';
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';

export default function StatisticsDetails({ supabase, sensorData, MeasurementName, ReadingList }) {

    const [sensorGridRows, setSensorGridRows] = useState([]);
    const [preRender, setPrerender] = useState(0);

    function SensorDataGridToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport csvOptions={{ fileName: "Sensor " + sensorData.id_sensor + " " + sensorData.name + " Readings" }} />
            </GridToolbarContainer>
        );
    }

    const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
        '& .good': {
            backgroundColor: '#ebf3eb', color: '#426742'
        },
        '& .bad': {
            backgroundColor: '#fbebeb', color: '#5b3952'
        }
    }));

    const sensorGridColumns = [
        { field: 'id', headerName: 'Nr Crt', width: 80, height: 20 },
        { field: 'Value', headerName: 'Value', width: 160, height: 20 },
        { field: 'Time', headerName: 'Recorded At', width: 160, height: 20 },
        { field: 'Diagnosis', headerName: 'Diagnosis', width: 160, height: 20 }
    ];

    const [roomData, setRoomData] = useState(null);

    const chooseDiagnostic = (element) => {
        if (MeasurementName === "Brigthness Level") return (element < 100 || element > 450) ? 'Needs Improvement' : 'Alright';
        if (MeasurementName === "Sound Level") return element > 0 ? 'Needs Improvement' : 'Alright';
        if (MeasurementName === "Temperature") return (element > 35 || element < 10) ? 'Needs Improvement' : 'Alright';
        if (MeasurementName === "Humidity") return (element > 65 || element < 10) ? 'Needs Improvement' : 'Alright';
        if (MeasurementName === "CO2 Level") return element > 450 ? 'Needs Improvement' : 'Alright';
        if (MeasurementName === "TVOC Level") return element > 350 ? 'Needs Improvement' : 'Alright';

    }

    const chooseFormating = (element) =>{

            if (MeasurementName === "Brigthness Level") return (element < 100 || element > 450) ? 'bad' : 'good';
            if (MeasurementName === "Sound Level") return element > 0 ? 'bad' : 'good';
            if (MeasurementName === "Temperature") return (element > 35 || element < 10) ? 'bad' : 'good';
            if (MeasurementName === "Humidity") return (element > 65 || element < 10) ? 'bad' : 'good';
            if (MeasurementName === "CO2 Level") return element > 450 ? 'bad' : 'good';
            if (MeasurementName === "TVOC Level") return element > 350 ? 'bad' : 'good';
        
    }

    useEffect(() => {
        async function fetchRoomData() {
            const { data: RoomData, error3 } = await supabase.from('room').select('*').eq('id_room', sensorData.id_room);
            if (error3 != null) {
                console.error('Error fetching data:', error3);
                setRoomData(null);
                return;
            } else {
                setRoomData(RoomData[0]);
                console.log(roomData);
            }

            if (preRender === 0) {
                let list = [];
                let count = 1;
                console.log(ReadingList);
                // eslint-disable-next-line array-callback-return
                ReadingList.map(element => {
                    list.push({
                        id: count,
                        Value: element.value,
                        Time: new Date(element.time_stamp).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }),
                        Diagnosis: chooseDiagnostic(element.value),
                        cellClassName: chooseFormating(element.value)
                    });
                    count = count + 1;
                })
                setSensorGridRows(list);
                setPrerender(1);
            }
        };
        fetchRoomData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [preRender]);


    return (
        <Box>
            {preRender > 0 && <>
                <Typography variant="h6"> Sensor {sensorData.id_sensor} - {sensorData.name}</Typography>
                <Typography variant="h6"> Room {roomData.id_room} - {roomData.name}</Typography>
                <Typography variant="caption"> {roomData.description}</Typography>
                <Typography variant="h5"> Measurement Type: {MeasurementName} </Typography>
                <Box mt={2} style={{ height: '50%', width: '100%', }}></Box>
                <StyledDataGrid
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
                    loading={!sensorGridRows.length}
                    getRowClassName={(params) => params.row.cellClassName}
                />
            </>
            }
        </Box>
    )
}