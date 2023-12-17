import React from 'react'
import { Snackbar, Alert } from '@mui/material'

export default function AlertAddSensor({ addSensorStatus, open, setSnackBarOpen}) {

    const handleSnackBarClose = () => setSnackBarOpen(false);

    return (
        <>
            {addSensorStatus === 'added-successfully' &&
                <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackBarClose} anchorOrigin={{ vertical:'top', horizontal:'center' }}>
                    <Alert severity="success">Sensor was added to room successfully! 😊
                    </Alert>
                </Snackbar>}
            {addSensorStatus === 'error-database' &&
                <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackBarClose} anchorOrigin={{ vertical:'top', horizontal:'center' }}>
                    <Alert severity="error">Please try again later! 😔</Alert>
                </Snackbar>}
        </>
    )
}
