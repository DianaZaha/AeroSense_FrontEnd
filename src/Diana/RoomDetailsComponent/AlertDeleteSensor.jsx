import React from 'react'
import { Snackbar, Alert } from '@mui/material'

export default function AlertDeleteSensor({ deleteSensorStatus, open, setSnackBarOpen}) {

    const handleSnackBarClose = () => setSnackBarOpen(false);
    return (
        <>
            {deleteSensorStatus === 'removed-successfully' &&
                <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackBarClose} anchorOrigin={{ vertical:'top', horizontal:'center' }}>
                    <Alert severity="success">Sensor removed successfully!😊</Alert>
                </Snackbar>}
            {deleteSensorStatus === 'error-database' &&
                <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackBarClose} anchorOrigin={{ vertical:'top', horizontal:'center' }}>
                    <Alert severity="error">Please try again later!😔</Alert>
                </Snackbar>}
        </>
    )
}