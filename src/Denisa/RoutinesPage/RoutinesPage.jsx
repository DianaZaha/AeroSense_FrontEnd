import { Container, Grid, Card, CardHeader, CardContent, CardActions, Button, Typography, Fab, Modal, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import RoutineDetails from '../../Crista/components/RoutineDetails';

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

export function RoutinesPage({ supabase }) {
    const [routines, setRoutines] = useState([]);
    const [openRoutine, setOpenRoutine] = useState(false);

    useEffect(() => {
        fetchRoutines();
    }, []);

    async function fetchRoutines() {
        const { data: FetchedRooms } = await supabase.from('routines').select('*').eq('id_user', 1);
        setRoutines(FetchedRooms);
    }

    return (
        <Container>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', position: 'sticky' }}>
                <Typography variant="h3">
                    Your routines:
                </Typography>
                <Fab variant="extended" sx={{ size: '140%', background: "#228B22" }} >
                    <AddIcon/>
                    New Routine
                </Fab>
            </Container>
            <Grid container spacing={2} flexWrap="wrap" sx={{ marginTop: 2 }}>
                <Grid item xs={3}>
                    {routines.map(routine => (
                        <>
                            <Card sx={{ maxWidth: 200 }} key={routine.id_routine}>
                                <CardHeader title={routine.name}/>
                                <CardContent>Start Date: {routine.start_date}</CardContent>
                                <CardActions>
                                    <Button size='small' onClick={() => setOpenRoutine(true)}>Details</Button>
                                </CardActions>
                            </Card>
                            <Modal open={openRoutine} onClose={() => setOpenRoutine(false)}>
                                <Box sx={style}>
                                    <RoutineDetails supabase={supabase} routineId={routine.id_routine} />
                                </Box>
                            </Modal>
                        </>
                    ))} 
                </Grid>
            </Grid>
        </Container>
    )
} 