import { Typography, Box, Fab, LinearProgress} from '@mui/material'
import { styled } from '@mui/material/styles';
import { React, useState, useEffect } from 'react'
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SensorDetailsComponent({ SensorName, ID, supabase, setDeleteSensorAlerState, onClose }) {
    function SensorDataGridToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport csvOptions={{ fileName: "Sensor " + SensorName + " Readings" }} />
            </GridToolbarContainer>
        );
    }

    const [fetchedLight, setFetchedLight] = useState(0);
    const [fetchedSound, setFetchedSound] = useState(0);
    const [fetchedTemp, setFetchedTemp] = useState(0);
    const [fetchedHumidity, setFetchedHumidity] = useState(0);
    const [fetchedCO2, setFetchedCO2] = useState(500);
    const [fetchedTVOC, setFetchedTVOC] = useState(0);
    const [preRender, setPrerender] = useState(0);
    const [sensorsGridRows, setSensorsGridRows] = useState([]);

    const sensorsGridColumns = [
        { field: 'id', headerName: '', width: 50, height: 20 },
        { field: 'Measurement', headerName: 'Measurement', width: 150, height: 20 },
        { field: 'Value', headerName: 'Value', width: 160, height: 20 }
    ];

    const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
        '& .good': {
            backgroundColor: '#ebf3eb', color: '#426742'
        },
        '& .bad': {
            backgroundColor: '#fbebeb', color: '#5b3952'
        }
    }));

    async function getEntries() {
        // Light
        console.log(ID);
        const { data: light } = await supabase.from('values').select('*').eq('id_measurement', 1).eq('id_sensor', ID).order('time_stamp', { ascending: false }).limit(1);
        if (light.length === 0) setFetchedLight(0);
        else setFetchedLight(light[0].value);

        // Sound
        const { data: sound } = await supabase.from('values').select('*').eq('id_measurement', 2).eq('id_sensor', ID).order('time_stamp', { ascending: false }).limit(1);
        if (sound.length === 0) setFetchedSound(0);
        else setFetchedSound(sound[0].value);

        // temp
        const { data: temp } = await supabase.from('values').select('*').eq('id_measurement', 3).eq('id_sensor', ID).order('time_stamp', { ascending: false }).limit(1);
        if (temp.length === 0) setFetchedTemp(0);
        else setFetchedTemp(temp[0].value);

        // hum
        const { data: hum } = await supabase.from('values').select('*').eq('id_measurement', 4).eq('id_sensor', ID).order('time_stamp', { ascending: false }).limit(1);
        if (hum.length === 0) setFetchedHumidity(0);
        else setFetchedHumidity(hum[0].value);

        // co2
        const { data: co2 } = await supabase.from('values').select('*').eq('id_measurement', 3).eq('id_sensor', ID).order('time_stamp', { ascending: false }).limit(1);
        if (co2.length === 0) setFetchedCO2(500);
        else setFetchedCO2(co2[0].value);

        // tvoc
        const { data: tvoc } = await supabase.from('values').select('*').eq('id_measurement', 4).eq('id_sensor', ID).order('time_stamp', { ascending: false }).limit(1);
        if (tvoc.length === 0) setFetchedTVOC(0);
        else setFetchedTVOC(tvoc[0].value);
    }

    useEffect(() => {
        async function fetchData() {
            setPrerender(0);

            // Fetch data from the database
            await getEntries();

            // Update the state with the fetched data
            let list = [];
            list.push({ id: 1, Measurement: "Brightness Level", Value: fetchedLight, cellClassName: (fetchedLight < 100 || fetchedLight > 450) ? 'bad' : 'good' });
            list.push({ id: 2, Measurement: "Sound pollution", Value: fetchedSound, cellClassName: fetchedSound > 0 ? 'bad' : 'good' });
            list.push({ id: 3, Measurement: "Temperature", Value: fetchedTemp, cellClassName: (fetchedTemp > 35 || fetchedTemp < 10) ? 'bad' : 'good' });
            list.push({ id: 4, Measurement: "Humidity %", Value: fetchedHumidity, cellClassName: (fetchedHumidity > 80 || fetchedHumidity < 10) ? 'bad' : 'good' });
            list.push({ id: 5, Measurement: "Air quality", Value: fetchedCO2, cellClassName: fetchedCO2 > 450 ? 'bad' : 'good' });
            list.push({ id: 6, Measurement: "TVOC", Value: fetchedTVOC, cellClassName: fetchedTVOC > 90 ? 'bad' : 'good' });
            setSensorsGridRows(list);
            setPrerender(1);
        }

        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ID, fetchedLight, fetchedSound, fetchedTemp, fetchedHumidity, fetchedCO2, fetchedTVOC]);


    const handleDeleteSensor = () => {
        deleteSensor(ID);
        onClose();
    }

    const deleteSensor= async (IdSensor) => {
        const { error } = await supabase.from('sensor').update({ id_room: null }).eq('id_sensor', IdSensor).single();
        if (error != null)
            setDeleteSensorAlerState('error-database');
        else {
            setDeleteSensorAlerState('removed-successfully');  
        }
    };

    if (preRender === 0) {
        return <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", flexDirection: 'row', p: 1, m: 1, }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", flexDirection: 'column', p: 1, m: 1, }}>
          <Typography>Loading data</Typography>
          <LinearProgress />
          </Box></Box>;
    }

    return (
        <Box>
            <Typography variant="h4"> Name: {SensorName} </Typography>
            <Typography> Sensor Factory ID: {ID} </Typography>
            <Typography> This is my sensor {SensorName} Description </Typography>
            <Typography> Ongoing Routines </Typography>

            <Box style={{
                height: '50%', width: '100%'
            }}>
                {preRender > 0 && <StyledDataGrid
                    columns={sensorsGridColumns}
                    rows={sensorsGridRows}
                    density="compact"
                    autoHeight
                    hideFooter
                    slots={{
                        toolbar: SensorDataGridToolbar,
                    }}
                    getRowClassName={(params) => params.row.cellClassName}
                />
                }
            </Box>
            <Box display="flex" justifyContent="space-around" alignItems="center" sx={{ paddingY: '3%' }}>
                <Fab variant="extended" sx={{ size: '140%', background: "#ffc2c2" }} onClick={handleDeleteSensor}>
                    <DeleteIcon />
                    Delete
                </Fab>
            </Box>
        </Box>
    )
}
