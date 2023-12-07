import React, { useState, useCallback } from 'react'
import { Container, Fab, Typography, Box, TextField } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import AlertModifyRoom from './AlertModifyRoom';

export default function RoomDetailsComponent({ supabase, RoomId, RoomName, RoomDetailsDescription, RoomSensorList, setDeleteAlerState, fetchRooms }) {

    const [notModifying, setNotModifying] = useState(true);
    const [roomName, setRoomName] = useState(RoomName);
    const [roomDescription, setRoomDescription] = useState(RoomDetailsDescription);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [updateRoomStatus, setUpdateRoomStatus] = useState('');

    const setSnackBarOpen = useCallback((value) => {
        setOpenSnackBar(value);
    }, []);

    const sensorsGridColumns = [
        { field: 'id', headerName: 'ID', width: 70, height: 20 },
        { field: 'SensorName', headerName: 'Sensor Name', width: 160, height: 20 }
    ];

    const sensorsGridRows = [];
    console.log(RoomSensorList);
    RoomSensorList.forEach(element => { sensorsGridRows.push({ id: element.id_sensor, SensorName: element.name }); })
    
    const handleDeleteRoom = () => {
        deleteRoom(RoomId);
    }

    const setModifyRoomAlert = useCallback((val) => {
        setOpenSnackBar(true);
        setUpdateRoomStatus(val);
        fetchRooms();
    }, []);


    const deleteRoom = async (RoomId) => {
        const { data, error1 } = await supabase.from('sensor').update({ id_room: 'NULL'}).eq('id_room', RoomId).select();
        if(error1 != null)
            setDeleteAlerState('error-database');
        else{
        const { error } = await supabase.from('room').delete().eq('id_room', RoomId);
        if (error != null)
            setDeleteAlerState('error-database');
        else
            setDeleteAlerState('deleted-successfully');
        }
    };

    const handleModifyRoom = () => {
        setNotModifying(!notModifying);
    }

    const handleSaveModificationsRoom = () => {
        var NewRoomName = document.getElementById("NameTxtField").value;
        var NewRoomDescription = document.getElementById("DescriptionTxtField").value;
        updateRoomData(RoomId, NewRoomDescription, NewRoomName);
    }

    const updateRoomData = async (id, NewRoomDescription, NewRoomName) => {
        let changeName = false;
        if(NewRoomName != roomName){
            changeName = true;
        }
        const { data: rooms, error1 } = await supabase.from('room').select('name').eq('name', NewRoomName);

        if ((rooms.length == 0 && changeName) || !changeName) {
            const { data, error } = await supabase.from('room').update({ id_room: id, description: NewRoomDescription, name: NewRoomName }).eq('id_room', id).single();
            console.log(error);
            if (error != null) {
                setModifyRoomAlert('error-database');
                handleDiscardModificationsRoom();
            }
            else {
                document.getElementById("NameTxtField").value = NewRoomName;
                document.getElementById("DescriptionTxtField").value = NewRoomDescription;
                setRoomName(NewRoomName);
                setRoomDescription(NewRoomDescription);
                setModifyRoomAlert('updated-successfully');
                setNotModifying(!notModifying);
            }
        }
        else {
            if(changeName){
            setModifyRoomAlert('error-similar-name');
            handleDiscardModificationsRoom();
            }
        }
    };


    const handleDiscardModificationsRoom = () => {
        document.getElementById("NameTxtField").value = roomName;
        document.getElementById("DescriptionTxtField").value = roomDescription;
        setNotModifying(!notModifying);
    }

    return (
        <>
            <Container>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', paddingY: '5%' }}>
                    <TextField required id="NameTxtField" label="Name"
                        margin="normal" defaultValue={roomName}
                        disabled={notModifying}
                        sx={{ "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "#228B22", } }} />
                    <TextField id="DescriptionTxtField" label="Description"
                        multiline maxRows={4} margin="normal" defaultValue={roomDescription}
                        disabled={notModifying}
                        sx={{ "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "#228B22", } }} />
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
                    <Typography variant='h6'>
                        Sensor List
                    </Typography>
                    <Box style={{ height: '50%', width: '100%' }}>
                        <DataGrid
                            columns={sensorsGridColumns}
                            rows={sensorsGridRows}
                            density="compact"
                            initialState={{
                                pagination: { paginationModel: { page: 0, pageSize: 3 }, },
                            }}
                            checkboxSelection
                            autoHeight
                        />
                    </Box>
                </Box>
                {notModifying === true &&
                    <Box display="flex" justifyContent="space-around" alignItems="center" sx={{ paddingY: '3%' }}>
                        <Fab variant="extended" sx={{ size: '140%', background: "#ffc2c2" }} onClick={handleDeleteRoom}>
                            <DeleteIcon />
                            Delete
                        </Fab>
                        <Fab variant="extended" sx={{ size: '140%', background: "#c2e7ff" }} onClick={handleModifyRoom} >
                            <EditIcon />
                            Modify
                        </Fab>
                    </Box>
                }
                {notModifying === false &&
                    <Box display="flex" justifyContent="space-around" alignItems="center" sx={{ paddingY: '3%' }}>
                        <Fab variant="extended" sx={{ size: '140%', background: "#ffc2c2" }} onClick={handleDiscardModificationsRoom}>
                            <ClearIcon />
                            Discard
                        </Fab>
                        <Fab variant="extended" sx={{ size: '140%', background: "#C1E1C1" }} onClick={handleSaveModificationsRoom}>
                            <SaveIcon />
                            Save
                        </Fab>
                    </Box>
                }
                <AlertModifyRoom updateRoomStatus={updateRoomStatus} open={openSnackBar} setSnackBarOpen={setSnackBarOpen} />
            </Container>
        </>
    )
}
