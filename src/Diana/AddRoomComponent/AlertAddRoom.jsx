import React from 'react'
import { Snackbar, Alert } from '@mui/material'

export default function AlertAddRoom({ addRoomStatus, open, setSnackBarOpen}) {

    const handleSnackBarClose = () => setSnackBarOpen(false);
    return (
        <>
            {addRoomStatus === 'added-successfully' &&
                <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackBarClose}>
                    <Alert severity="success">Room was added successfully! 😊
                    </Alert>
                </Snackbar>}
            {addRoomStatus === 'error-similar-name' &&
                <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackBarClose}>
                    <Alert severity="error">There exists a room with similar name 🤔</Alert>
                </Snackbar>}
            {addRoomStatus === 'error-database' &&
                <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackBarClose}>
                    <Alert severity="error">Please try again later! 😔</Alert>
                </Snackbar>}
        </>
    )
}
