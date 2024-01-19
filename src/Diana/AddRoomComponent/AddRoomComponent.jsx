import React, { useEffect, useState } from 'react'
import { Box, Button, TextField } from '@mui/material';

export default function AddRoomComponent({ supabase, UserID , onClose, setAddRoomAlerState}) {
    const [length, setLength] = useState(0);

    const StoreInput = () => {
        var RoomName = document.getElementById("NameTxtField").value;
        var RoomDescription = document.getElementById("DescriptionTxtField").value;
        console.log({length}, {UserID}, RoomDescription, RoomName);
        postData(length, UserID, RoomDescription, RoomName);
        onClose();
    }

    useEffect(() => {
    async function fetchRoomNumber() {
        const { data: Rooms } = await supabase.from('room').select('*');
        var len = 0;
        Rooms.forEach(element => { len = len + 1; });
        setLength(len+1);
        }
        fetchRoomNumber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const postData = async (id, UserID, RoomDescription, RoomName) => {

        // eslint-disable-next-line no-unused-vars
        const { data: machine_group, error1 } = await supabase.from('room').select('name').eq('name', RoomName);
        if(machine_group.length === 0){
        // eslint-disable-next-line no-unused-vars
        let { data, error } = await supabase.from('room').insert({ id_user:  UserID , description:  RoomDescription , name:  RoomName }).single();
            if(error != null)
            setAddRoomAlerState('error-database');
            else
            setAddRoomAlerState('added-successfully');
        }
        else
        setAddRoomAlerState('error-similar-name');
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <TextField required id="NameTxtField" label="Name" margin="normal" />
                <TextField id="DescriptionTxtField" label="Description" multiline maxRows={4} margin="normal" />
                <Button variant="contained" sx={{ background: "#228B22" }} onClick={StoreInput}> Add Room </Button>
            </Box>

        </Box>
    )
}
