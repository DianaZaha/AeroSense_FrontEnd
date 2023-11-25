import { Button, Container, IconButton, Typography, Box, List, ListItem} from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function RoomDetailsComponent({ RoomName, RoomDetailsDescription, RoomSensorList }) {
    return (
        <>
            <Container>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', paddingY: '5%' }}>
                    <Typography variant='h5' >
                        {RoomName}
                        <IconButton >
                            <EditIcon sx={{ padding: '10%' }} />
                        </IconButton>
                    </Typography>

                </Box>
                <Box sx={{ paddingY: '5%' }}>
                    <Box></Box>
                    <Typography variant='h6'>
                        Description
                    </Typography>
                    <Typography variant='h8'>
                        {RoomDetailsDescription}
                    </Typography>
                    <IconButton sx={{ size: '80%', padding: '1%' }}>
                            <EditIcon sx={{ size: '80%', padding: '10%' }} />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
                    <Typography variant='h6'>
                        Sensor List
                    </Typography>
                    <List>
                    {RoomSensorList.map(element => (
                        <ListItem key={element.id_machine}>
                            <Box > <Typography> {element.id_machine} {element.name} </Typography> </Box>
                        </ListItem>
                    ))
                    }
                    </List>
                    
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" sx={{ paddingY: '10%' }}>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Delete this room
                    </Button>
                </Box>
            </Container>
        </>
    )
}
