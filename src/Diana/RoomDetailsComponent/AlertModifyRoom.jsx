import React from 'react'
import { Snackbar, Alert } from '@mui/material'

export default function AlertModifyRoom({ updateRoomStatus, open, setSnackBarOpen}) {

    const handleSnackBarClose = () => setSnackBarOpen(false);
    return (
        <>
            {updateRoomStatus === 'updated-successfully' &&
                <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackBarClose} anchorOrigin={{ vertical:'top', horizontal:'center' }}>
                    <Alert severity="success">Room updated successfully!😊</Alert>
                </Snackbar>}
            {updateRoomStatus === 'error-database' &&
                <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackBarClose} anchorOrigin={{ vertical:'top', horizontal:'center' }}>
                    <Alert severity="error">Please try again later!😔</Alert>
                </Snackbar>}
            {updateRoomStatus === 'error-similar-name' &&
                <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackBarClose} anchorOrigin={{ vertical:'top', horizontal:'center' }}>
                    <Alert severity="error">There exists a room with similar name🤔</Alert>
                </Snackbar>}
        </>
    )
}
