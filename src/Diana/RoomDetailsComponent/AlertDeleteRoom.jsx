import React from 'react'
import { Snackbar, Alert } from '@mui/material'

export default function AlertDeleteRoom({ deleteRoomStatus, open, setSnackBarOpen}) {

    const handleSnackBarClose = () => setSnackBarOpen(false);
    return (
        <>
            {deleteRoomStatus === 'deleted-successfully' &&
                <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackBarClose} anchorOrigin={{ vertical:'top', horizontal:'center' }}>
                    <Alert severity="success">Room was deleted successfully! 😊
                    </Alert>
                </Snackbar>}
            {deleteRoomStatus === 'error-database' &&
                <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackBarClose} anchorOrigin={{ vertical:'top', horizontal:'center' }}>
                    <Alert severity="error">Please try again later! 😔</Alert>
                </Snackbar>}
        </>
    )
}
