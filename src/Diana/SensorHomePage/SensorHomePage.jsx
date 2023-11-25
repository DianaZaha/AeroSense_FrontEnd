import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material'
import SideBarComponent from './SideBarComponent/SideBarComponent';
import RoomCard from './RoomCard/RoomCard';
import Typography from '@mui/material/Typography';

const RoomList = [ 
    ["Apartment 5", "This room is monitoring the aparment of Adam Family.Their emergency number is: +40372764164.", 
        ["Kitchen", "Bedroom", "Kid's Room"]],
    ["Apartment 6", " This is the aparment of Biily Family.", ["Bedroom", "Living Room"]],
    ["Apartment 7", "Administrations aparment", ["Brenda's Rooms", "Storage"]]
];


export default function SensorHomePage() {
    return (
        <>
        {/* <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Container maxWidth='xl'>
                <SideBarComponent />
            </Container>
        </Box> */}
        <Box sx={{ padding:'2%', width: '100%' }}>
            <Typography variant="h3" gutterBottom>
                Your Building/Rooms with Sensors:
            </Typography>
            {
                RoomList.map(element =>(
                    <Box sx={{ paddingY:'0.5%'}}> <RoomCard Name={element[0]} Description={element[1]} sensorList={element[2]}/></Box>
                ))
            }
        </Box>
        
        </>
    )
}
