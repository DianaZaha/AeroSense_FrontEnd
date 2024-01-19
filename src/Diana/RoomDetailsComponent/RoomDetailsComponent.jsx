import React, { useState, useCallback, useEffect } from 'react'
import { Container, Fab, Typography, Box, TextField, Button } from '@mui/material'
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import AlertModifyRoom from './AlertModifyRoom';
import AlertDeleteSensor from './AlertDeleteSensor';

export default function RoomDetailsComponent({ supabase, RoomId, RoomName, RoomDetailsDescription, RoomSensorList, setDeleteAlerState, fetchRooms, fetchMachines }) {

    const [notModifying, setNotModifying] = useState(true);
    const [roomName, setRoomName] = useState(RoomName);
    const [roomDescription, setRoomDescription] = useState(RoomDetailsDescription);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [updateRoomStatus, setUpdateRoomStatus] = useState('');
    const [deleteSensorStatus, setDeleteSensorStatus] = useState('');
    const [rowSelectionModel, setRowSelectionModel] = useState([]);
    const [sensorList, setSensorList] = useState(RoomSensorList);
    const [sensorsGridRows, setSensorsGridRows] = useState([]);
    const [preRender, setPrerender] = useState(0);

    function SensorDataGridToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport csvOptions={{ fileName: "Room " + RoomId+ " " + RoomName +" Sensor List" }} />
                <Button onClick={handleRemoveSensors} size='small'><DeleteIcon /> Remove Sensors</Button>
            </GridToolbarContainer>
        );
    }

    const setRemoveSensor = useCallback((val) => {
        setOpenSnackBar(true);
        setDeleteSensorStatus(val);
        setPrerender(-1);
        fetchRooms();
        fetchMachines();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    async function removeSensor(IdSensor) {
        const { error } = await supabase.from('sensor').update({ id_room: null }).eq('id_sensor', IdSensor).single();
        if(error !== null){
            setRemoveSensor('error-database');
        }
        else{
            setRemoveSensor('removed-successfully');
        }
    }

    const handleRemoveSensors = () => {
        removeSensor(rowSelectionModel[0]);
    }

    useEffect(() => {
        async function fetchData() {

            try {
                // Fetch data from the database
                const { data: sensors, error } = await supabase.from('sensor').select('*').eq('id_room', RoomId);

                if (error != null) {
                    setSensorList([]);
                }
                else {
                    sensors.sort((a, b) => a.id_sensor > b.id_sensor ? 1 : -1);
                    setSensorList(sensors);
                }
                // Update the state with the fetched data
                let list = [];
                // eslint-disable-next-line array-callback-return
                sensorList.map(element => { list.push({ id: element.id_sensor, SensorName: element.name }) })
                setSensorsGridRows(list);
                setPrerender(1);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        }

        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [RoomId,preRender]);

    const setSnackBarOpen = useCallback((value) => {
        setOpenSnackBar(value);
    }, []);

    const sensorsGridColumns = [
        { field: 'id', headerName: 'ID', width: 70, height: 20 },
        { field: 'SensorName', headerName: 'Sensor Name', width: 160, height: 20 }
    ];

    const handleDeleteRoom = () => {
        deleteRoom(RoomId);
    }

    const setModifyRoomAlert = useCallback((val) => {
        setOpenSnackBar(true);
        setUpdateRoomStatus(val);
        fetchRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const deleteRoom = async (RoomId) => {
        const { error1 } = await supabase.from('sensor').update({ id_room: 'NULL' }).eq('id_room', RoomId).select();
        if (error1 != null)
            setDeleteAlerState('error-database');
        else {
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
        if (NewRoomName !== roomName) {
            changeName = true;
        }
        const { data: rooms } = await supabase.from('room').select('name').eq('name', NewRoomName);

        if ((rooms.length === 0 && changeName) || !changeName) {
            const { error } = await supabase.from('room').update({ id_room: id, description: NewRoomDescription, name: NewRoomName }).eq('id_room', id).single();
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
            if (changeName) {
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
                        {preRender > 0 && <DataGrid
                            columns={sensorsGridColumns}
                            rows={sensorsGridRows}
                            density="compact"
                            initialState={{
                                pagination: { paginationModel: { pageSize: 3 }, },
                            }}
                            autoHeight
                            slots={{
                                toolbar: SensorDataGridToolbar,
                            }}
                            onRowSelectionModelChange={(newRowSelectionModel) => {
                                setRowSelectionModel(newRowSelectionModel);
                            }}
                            rowSelectionModel={rowSelectionModel}
                            pageSizeOptions={[3, 6]}
                            disableMultipleRowSelection={true}
                        />
                        }
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
                <AlertDeleteSensor deleteSensorStatus={deleteSensorStatus} open={openSnackBar} setSnackBarOpen={setSnackBarOpen} />
            </Container>
        </>
    )
}
