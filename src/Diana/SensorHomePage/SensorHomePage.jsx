import React from 'react';
import { Box} from '@mui/material'
import RoomCard from './RoomCard/RoomCard';
import Typography from '@mui/material/Typography';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://qniuxbcurrnrzyptvfej.supabase.co/", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuaXV4YmN1cnJucnp5cHR2ZmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5MjEyOTIsImV4cCI6MjAxNjQ5NzI5Mn0.m19rQ75BCpl_6iX-unkW3keao72D4po1olxds1YKeNo");

const { data: Machines} = await supabase.from('machine_group').select('*').eq('id_user', 1);

export default function SensorHomePage() {
    return (
        <>
        <Box sx={{ padding:'2%', width: '100%' }}>
            <Typography variant="h3" gutterBottom>
                Your Building/Rooms with Sensors:
            </Typography>
            {
                Machines.map(element =>(
                    <Box sx={{ paddingY:'0.5%'}}> <RoomCard Name={element.name} Description={element.description} 
                    RoomId={element.id_machine_group}/></Box>
                ))
            }
        </Box>
        </>
    )
}
