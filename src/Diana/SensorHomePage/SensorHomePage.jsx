import React, { useState, useEffect, useCallback } from 'react';
import { Box, Fab, Modal, Typography, Container } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RoomCard from './RoomCard/RoomCard';
import AddRoomComponent from '../AddRoomComponent/AddRoomComponent';
import AlertAddRoom from '../AddRoomComponent/AlertAddRoom'
import AlertDeleteRoom from '../RoomDetailsComponent/AlertDeleteRoom';
import UnallocatedSensorsCard from './RoomCard/UnallocatedSensorsCard';
import AlertAddSensor from '../AddSensorComponent/AlertAddSensor';
import AlertDeleteSensor from '../RoomDetailsComponent/AlertDeleteSensor';

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

export default function SensorHomePage({ supabase, userId }) {
    const [Rooms, setRooms] = useState([]);
    const [unallocatedSensors, SetUnallocatedSensors] = useState([]);
    const [preRender, setPrerender] = useState(0);
    const [openNewRoom, setOpenNewRoom] = useState(false);
    const [addRoomStatus, setAddRoomStatus] = useState('');
    const [deleteRoomStatus, setDeleteRoomStatus] = useState('');
    const [addSensorStatus, setAddSensorStatus] = useState('');
    const [deleteSensorStatus, setDeleteSensorStatus] = useState('');
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const handleOpenNewRoom = () => setOpenNewRoom(true);
    const handleCloseNewRoom = () => setOpenNewRoom(false);

    async function fetchRooms() {
        const { data: FetchedRooms, error } = await supabase.from('room').select('*').eq('id_user', userId);
        if (error != null)
            setRooms([]);
        else
            setRooms(FetchedRooms);
        const { data: FetchedSensors, error1 } = await supabase.from('sensor').select('*').eq('id_user', userId).is('id_room', null);
        if (error1 != null)
            SetUnallocatedSensors([]);
        else {
            FetchedSensors.sort((a, b) => a.id_sensor > b.id_sensor ? 1 : -1);
            SetUnallocatedSensors(FetchedSensors);
        }
    }

    function resetAllerts() {
        setDeleteSensorStatus('');
        setAddRoomStatus('');
        setDeleteRoomStatus('');
        setAddSensorStatus('');
    }

    const setDeleteSensorAlerState = useCallback((val)=>{
        resetAllerts();
        setDeleteSensorStatus(val);
        setOpenSnackBar(true);
        fetchRooms();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setAddRoomAlerState = useCallback((val) => {
        resetAllerts();
        setAddRoomStatus(val);
        setOpenSnackBar(true);
        fetchRooms();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setDeleteAlerState = useCallback((val) => {
        resetAllerts()
        setDeleteRoomStatus(val);
        setOpenSnackBar(true);
        fetchRooms();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setAddSensorAlerState = useCallback((val) => {
        resetAllerts();
        setAddSensorStatus(val);
        setOpenSnackBar(true);
        fetchRooms();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setSnackBarOpen = useCallback((value) => {
        setOpenSnackBar(value);
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                fetchRooms();
                setPrerender(1);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        }
        fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [preRender]);

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
            {preRender > 0 &&
                Rooms.map(element => (
                    <Box key={element.id_room} sx={{ paddingY: '0.5%' }}>
                        <RoomCard
                            supabase={supabase}
                            UserID={userId}
                            Name={element.name}
                            Description={element.description}
                            RoomId={element.id_room}
                            fetchRooms={fetchRooms}
                            setAddSensorAlerState={setAddSensorAlerState}
                            setDeleteAlerState={setDeleteAlerState}
                            setDeleteSensorAlerState={setDeleteSensorAlerState}
                        />
                    </Box>
                ))
            }
            <UnallocatedSensorsCard unallocatedList={unallocatedSensors} supabase={supabase}/>
            <Modal open={openNewRoom} onClose={handleCloseNewRoom} >
                <Box sx={style}>
                    <AddRoomComponent UserID={userId} supabase={supabase} onClose={handleCloseNewRoom} setAddRoomAlerState={setAddRoomAlerState} />
                </Box>
            </Modal>
            <AlertAddRoom addRoomStatus={addRoomStatus} open={openSnackBar} setSnackBarOpen={setSnackBarOpen} />
            <AlertDeleteRoom deleteRoomStatus={deleteRoomStatus} open={openSnackBar} setSnackBarOpen={setSnackBarOpen} />
            <AlertAddSensor addSensorStatus={addSensorStatus} open={openSnackBar} setSnackBarOpen={setSnackBarOpen} />
            <AlertDeleteSensor deleteSensorStatus={deleteSensorStatus} open={openSnackBar} setSnackBarOpen={setSnackBarOpen}/>
        </Box>
    )
}
