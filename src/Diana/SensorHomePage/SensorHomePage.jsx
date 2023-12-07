import React, { useState, useEffect, useCallback } from 'react';
import { Box, IconButton, Fab, Modal, Typography, Container, Alert, Snackbar } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RoomCard from './RoomCard/RoomCard';
import AddRoomComponent from '../AddRoomComponent/AddRoomComponent';
import AlertAddRoom from '../AddRoomComponent/AlertAddRoom'
import AlertDeleteRoom from '../RoomDetailsComponent/AlertDeleteRoom';
import UnallocatedSensorsCard from './RoomCard/UnallocatedSensorsCard';
import AlertAddSensor from '../AddSensorComponent/AlertAddSensor';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function SensorHomePage({ supabase }) {
    const [Rooms, setRooms] = useState([]);
    const [unallocatedSensors, SetUnallocatedSensors] = useState([]);
    const [preRender, setPrerender] = useState(0);
    const [openNewRoom, setOpenNewRoom] = useState(false);
    const [addRoomStatus, setAddRoomStatus] = useState('');
    const [deleteRoomStatus, setDeleteRoomStatus] = useState('');
    const [addSensorStatus, setAddSensorStatus] = useState('');
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const handleOpenNewRoom = () => setOpenNewRoom(true);
    const handleCloseNewRoom = () => setOpenNewRoom(false);

    const setAlerState = useCallback((val) => {
        setOpenSnackBar(true);
        setAddRoomStatus(val);
        fetchRooms();
    }, []);

    const setDeleteAlerState = useCallback((val) => {
        setOpenSnackBar(true);
        setDeleteRoomStatus(val);
        fetchRooms();
    }, []);

    const setAddSensorAlerState = useCallback((val) => {
        setOpenSnackBar(true);
        setAddSensorStatus(val);
        fetchRooms();
    }, []);

    async function fetchRooms() {
        const { data: FetchedRooms, error } = await supabase.from('room').select('*').eq('id_user', 1);
        if (error != null)
            setRooms([]);
        else
            setRooms(FetchedRooms);
        const { data: FetchedSensors, error1 } = await supabase.from('sensor').select('*').eq('id_user', 1).is('id_room', null);
        if (error1 != null)
            SetUnallocatedSensors([]);
        else {
            FetchedSensors.sort((a, b) => a.id_sensor > b.id_sensor ? 1 : -1);
            SetUnallocatedSensors(FetchedSensors);
        }
    }

    const setSnackBarOpen = useCallback((value) => {
        setOpenSnackBar(value);
    }, []);

    if (preRender === 0) {
        setAlerState('');
        setPrerender(1);
        setOpenSnackBar(false);
    }

    return (
        <Box sx={{ padding: '2%', width: '100%' }}>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', position: 'sticky' }}>
                <Typography variant="h3">
                    Your Building/Rooms with Sensors:
                </Typography>
                <Fab variant="extended" onClick={handleOpenNewRoom} sx={{ size: '140%', background: "#228B22", color: "#ffffff" }} >
                    <AddIcon />
                    New Room
                </Fab>
            </Container>
            {
                Rooms.map(element => (
                    <Box key={element.id_room} sx={{ paddingY: '0.5%' }}>
                        <RoomCard
                            supabase={supabase}
                            Name={element.name}
                            Description={element.description}
                            RoomId={element.id_room}
                            setDeleteAlerState={setDeleteAlerState}
                            setAddSensorAlerState={setAddSensorAlerState}
                            fetchRooms={fetchRooms}
                        />
                    </Box>
                ))
            }
            <UnallocatedSensorsCard unallocatedList={unallocatedSensors} />
            <Modal open={openNewRoom} onClose={handleCloseNewRoom} >
                <Box sx={style}>
                    <AddRoomComponent UserID={1} supabase={supabase} onClose={handleCloseNewRoom} setAlerState={setAlerState} />
                </Box>
            </Modal>
            <AlertAddRoom addRoomStatus={addRoomStatus} open={openSnackBar} setSnackBarOpen={setSnackBarOpen} />
            <AlertDeleteRoom deleteRoomStatus={deleteRoomStatus} open={openSnackBar} setSnackBarOpen={setSnackBarOpen} />
            <AlertAddSensor addSensorStatus={addSensorStatus} open={openSnackBar} setSnackBarOpen={setSnackBarOpen} />
        </Box>
    )
}
