import React from 'react'
import { Typography, Box, Fab} from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete';
import SensorDataGrid from './SensorDataGrid';

export default function SensorDetailsComponent({ SensorName, ID, supabase, setDeleteSensorAlerState, onClose }) {
    
    const handleDeleteSensor = () => {
        deleteSensor(ID);
        onClose();
    }

    const deleteSensor = async (IdSensor) => {
        const { error } = await supabase.from('sensor').update({ id_room: null }).eq('id_sensor', IdSensor).single();
        if (error != null)
            setDeleteSensorAlerState('error-database');
        else {
            setDeleteSensorAlerState('removed-successfully');
        }
    };

    console.log("I am rerendering the details component!!")
    return (
        <Box>
            <Typography variant="h4"> Name: {SensorName} </Typography>
            <Typography variant="h4"> Sensor Factory ID: {ID} </Typography>
            <SensorDataGrid supabase={supabase} ID={ID} SensorName={SensorName}/>
            <Typography variant='caption'>*lux = lumeni, db = decibels, ppm = parts per milion, ppb =  parts per bilion,  </Typography>
            <Typography variant="caption">Please note that the data refreshes automatically every 20 seconds!</Typography>
            <Box display="flex" justifyContent="space-around" alignItems="center" sx={{ paddingY: '3%' }}>
                <Fab variant="extended" sx={{ size: '140%', background: "#ffc2c2" }} onClick={handleDeleteSensor}>
                    <DeleteIcon />
                    Delete
                </Fab>
            </Box>
        </Box>
    )

}
