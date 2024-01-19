import { React, useState, useEffect } from 'react'
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';

export default function SensorDataGrid({supabase, ID, SensorName}) {

    const [sensorsGridRows, setSensorsGridRows] = useState([]);

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

    const list = sensorsGridRows;
    const sensorsGridColumns = [
        { field: 'id', headerName: '', width: 50, height: 20 },
        { field: 'Measurement', headerName: 'Measurement', width: 150, height: 20 },
        { field: 'Value', headerName: 'Value', width: 100, height: 20 },
        { field: 'Diagnosis', headerName: 'Diagnosis', width: 160, height: 20 }
    ];

    const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
        '& .good': {
            backgroundColor: '#ebf3eb', color: '#426742'
        },
        '& .bad': {
            backgroundColor: '#fbebeb', color: '#5b3952'
        }
    }));



    async function getLigth() {
        // Light
        console.log(ID);
        const { data: light } = await supabase.from('values').select('*').eq('id_measurement', 1).eq('id_sensor', ID).order('time_stamp', { ascending: false }).limit(1);
        if (light.length === 0) return 0;
        else return light[0].value;
    }
    
    async function getSound() {
        // Sound
        const { data: sound } = await supabase.from('values').select('*').eq('id_measurement', 2).eq('id_sensor', ID).order('time_stamp', { ascending: false }).limit(1);
        if (sound.length === 0) return 0;
        else return sound[0].value;
    }
    
    async function getTemp() {
        // temp
        const { data: temp } = await supabase.from('values').select('*').eq('id_measurement', 3).eq('id_sensor', ID).order('time_stamp', { ascending: false }).limit(1);
        if (temp.length === 0) return 0;
        else return temp[0].value;
    }
    
    async function getHum() {
        // hum
        const { data: hum } = await supabase.from('values').select('*').eq('id_measurement', 4).eq('id_sensor', ID).order('time_stamp', { ascending: false }).limit(1);
        if (hum.length === 0) return 0;
        else return hum[0].value;
    }
    async function getCO2() {
        // co2
        const { data: co2 } = await supabase.from('values').select('*').eq('id_measurement', 5).eq('id_sensor', ID).order('time_stamp', { ascending: false }).limit(1);
        if (co2.length === 0) return 500;
        else return co2[0].value;
    }
    
    async function getTVOC() {
        // tvoc
        const { data: tvoc } = await supabase.from('values').select('*').eq('id_measurement', 6).eq('id_sensor', ID).order('time_stamp', { ascending: false }).limit(1);
        if (tvoc.length === 0) return 0;
        else return tvoc[0].value
    }
    
      useEffect(() =>{
        async function fetchData(){
            const list = [];
    
            const fetchedLight =  await getLigth();
            list.push({ id: 1, Measurement: "Brightness Level", Value: fetchedLight + ' lux', Diagnosis: (fetchedLight < 100 || fetchedLight > 450) ? 'Needs Improvement' : 'Alright', cellClassName: (fetchedLight < 100 || fetchedLight > 450) ? 'bad' : 'good' });
    
            const fetchedSound = await getSound();
            list.push({ id: 2, Measurement: "Sound pollution", Value: fetchedSound === 1 ? '> 80 db' : '< 80 db', Diagnosis: fetchedSound > 0 ? 'Needs Improvement' : 'Alright', cellClassName: fetchedSound > 0 ? 'bad' : 'good' });
    
            const fetchedTemp = await getTemp();
            list.push({ id: 3, Measurement: "Temperature", Value: fetchedTemp + '°C ', Diagnosis: (fetchedTemp > 35 || fetchedTemp < 10) ? 'Needs Improvement' : 'Alright', cellClassName: (fetchedTemp > 35 || fetchedTemp < 10) ? 'bad' : 'good' });
    
            const fetchedHumidity = await getHum();
            list.push({ id: 4, Measurement: "Humidity %", Value: fetchedHumidity + '%', Diagnosis: (fetchedHumidity > 65 || fetchedHumidity < 10) ? 'Needs Improvement' : 'Alright', cellClassName: (fetchedHumidity > 65 || fetchedHumidity < 10) ? 'bad' : 'good' });
    
            const fetchedCO2 = await getCO2();
            list.push({ id: 5, Measurement: "Air quality", Value: fetchedCO2 + ' ppm', Diagnosis: fetchedCO2 > 450 ? 'Needs Improvement' : 'Alright', cellClassName: fetchedCO2 > 450 ? 'bad' : 'good' });
    
            const fetchedTVOC = await getTVOC();
            list.push({ id: 6, Measurement: "TVOC", Value: fetchedTVOC + ' ppb', Diagnosis: fetchedTVOC > 350 ? 'Needs Improvement' : 'Alright', cellClassName: fetchedTVOC > 350 ? 'bad' : 'good' });
        
            console.log(list);
            setSensorsGridRows(list);
        }
       fetchData();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ID, supabase]);

console.log("I am rendering this data grid!")
  return (
    <StyledDataGrid
                columns={sensorsGridColumns}
                rows={list}
                density="compact"
                autoHeight
                hideFooter
                slots={{ toolbar: SensorDataGridToolbar, }}
                loading={!sensorsGridRows.length}
                getRowClassName={(params) => params.row.cellClassName}
            />
  )
}
