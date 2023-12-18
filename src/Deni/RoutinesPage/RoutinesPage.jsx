import { Container, Grid, Card, CardHeader, CardContent, CardActions, Button, Typography, Fab, Modal, Box, CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import RoutineDetails from '../../Crista/components/RoutineDetails';
import dayjs from 'dayjs';

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

const defaultValue = {
	id_routine: 0,
	id_user: 0,
	name: '',
	description: '',
	start_date: dayjs(),
	end_date: dayjs(),
	co2: {
		id_measurement: 0,
		state: false
	},
	temperature: {
		id_measurement: 0,
		state: false
	},
	light: {
		id_measurement: 0,
		state: false
	},
	sound: {
		id_measurement: 0,
		state: false
	},
	humidity: {
		id_measurement: 0,
		state: false
	},
    tvoc: {
        id_measurement: 0,
        state: false
    }
}


export function RoutinesPage({ supabase, userId }) {
    const [routines, setRoutines] = useState([]);
    const [openRoutine, setOpenRoutine] = useState(false);

    const [routine, setRoutine] = useState(defaultValue);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('Create routine');

    async function fetchRoutine(routineId, userId) {
        const { data } = await supabase.from('routines').select('*, routines_measurement( measurement( id_measurement, name ), state )').eq('id_routine', routineId).eq('id_user', userId);
        let processedData = {
            id_routine: routineId,
            id_user: userId,
            name: data[0].name,
            description: data[0].description,
            start_date: data[0].start_date,
            end_date: data[0].end_date,
        };

        data[0].routines_measurement.forEach((measurement) => {
            processedData = {
                ...processedData,
                [measurement.measurement.name]: {
                    id_measurement: measurement.measurement.id_measurement,
                    state: measurement.state
                }
            }
        });
        return processedData;
    }

    async function fetchRoutines() {
        const { data: FetchedRooms } = await supabase.from('routines').select('*').eq('id_user', userId);
        setRoutines(FetchedRooms);
    }
    useEffect(() => {
        fetchRoutines();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function openRoutineDetails(routineId) {
        setLoading(true);
        setOpenRoutine(true);
        fetchRoutine(routineId, userId).then(processedData => {
            setTitle(`Routine with ID: ${processedData.id_routine}`);
            setRoutine(processedData);
            setLoading(false);
        }).catch(() => {
            console.log('Something went wrong!');
        });
    }

    function closeModal() {
        setOpenRoutine(false);
        setRoutine(defaultValue);
        setTitle('Create routine');
        fetchRoutines();
    }

    return (
        <Container key="routines_container">
            <Container sx={{ display: 'flex', justifyContent: 'space-between', position: 'sticky' }} key="title_header">
                <Typography variant="h3" key="title">
                    Your routines:
                </Typography>
                <Fab variant="extended" sx={{ size: '140%', background: "#228B22" }} key="add_new_routine_button" onClick={() =>{
                    setOpenRoutine(true);
                }}>
                    <AddIcon/>
                    New Routine
                </Fab>
            </Container>
            <Grid container spacing={2} flexWrap="wrap" sx={{ marginTop: 2 }} key="routines_grid">
                {routines.map(routine => (
                    <Grid item xs={2}>
                        <>
                            <Card sx={{ maxWidth: 250 }} key={routine.id_routine}>
                                <CardHeader title={routine.name}/>
                                <CardContent>Start Date: {dayjs(routine.start_date).toString()}</CardContent>
                                <CardActions>
                                    <Button size='small' onClick={() => openRoutineDetails(routine.id_routine)}>Details</Button>
                                </CardActions>
                            </Card>
                        </>
                    </Grid>
                ))} 
            </Grid>
            <Modal open={openRoutine} onClose={() => {
                closeModal()
            }}> 
                <Box sx={style}>
                    {loading && <CircularProgress/>}
                    {!loading &&
                        <RoutineDetails supabase={supabase} title={title} routineDetails={routine} closeModal={closeModal} userId={userId}/>
                    }
                </Box>
            </Modal>
        </Container>
    )
} 