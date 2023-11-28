import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { ListItem, List, Box } from '@mui/material';

// Include the Google Fonts link directly in your component
const GoogleFontsLink = (
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Jura:wght@400;700&display=swap"
  />
);

const sensorList = ["Kitchen", "Bedroom", "Child's Room", "Storage Room"];

export default function RoutineDetails({supabase, routineId}) {
	const [routine, setRoutine] = useState({});

	async function fetchRoutine(routineId) {
		const { data } = await supabase.from('routines').select('*, routines_sensor( sensor(name), state)').eq('id_routine', routineId);
		setRoutine(data[0]);
	}

	useEffect(() => {
		fetchRoutine(routineId);
	}, [])

	return (
		<>
			{GoogleFontsLink}
			<Card sx={{ maxWidth: 450, margin: 'auto', padding: 2 }}>
				<CardContent sx={{ textAlign: 'center' }}>
				<Typography variant="h5" component="div" sx={{ fontFamily: 'Jura, sans-serif' }}>
					{routine.name}
				</Typography>
				<Typography variant="h5" sx={{ fontFamily: 'Jura, sans-serif', marginBottom: 2 }}>
					Start Date: {routine.start_date}
				</Typography>
				<Typography variant="h5" sx={{ fontFamily: 'Jura, sans-serif', marginBottom: 2 }}>
					End Date: {routine.end_date}
				</Typography>
				<Typography variant="h5" sx={{ fontFamily: 'Jura, sans-serif', marginBottom: 2 }}>
					Description: {routine.description}
				</Typography>
				{/* <FormControlLabel
					control={<Checkbox name="air" sx={{ fontFamily: 'Jura, sans-serif' }} value={routine.check_air}/>}
					label="Air"
				/>
				<FormControlLabel
					control={<Checkbox name="sound" sx={{ fontFamily: 'Jura, sans-serif' }} value={routine.check_sound}/>}
					label="Sound"
				/>
				<FormControlLabel
					control={<Checkbox name="humidity" sx={{ fontFamily: 'Jura, sans-serif' }} value={routine.check_humidity}/>}
					label="Humidity"
				/>
				<FormControlLabel
					control={<Checkbox name="light" sx={{ fontFamily: 'Jura, sans-serif' }} value={routine.check_light}/>}
					label="Light"
				/> */}
				{
					routine.routine_sensor&&routine.routine_sensor.foreach(sensor => {
						<p>Test</p>
					})
				}
				{/* <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
					<Typography variant="h6" sx={{ fontFamily: 'Jura, sans-serif', marginTop: 1 }}>
					Sensor List
					</Typography>
					<List>
					{sensorList.map((element) => (
						<ListItem key={element} sx={{ fontFamily: 'Jura, sans-serif' }}>
						{element}
						</ListItem>
					))}
					<ListItem sx={{ textAlign: 'center', fontFamily: 'Jura, sans-serif', marginTop: 2 }}>
						<Button
						variant="contained"
						color="secondary"
						>
						Add a Sensor to the Routine
						</Button>
					</ListItem>
					</List>
				</Box>
				<Button variant="contained" color="primary" sx={{ fontFamily: 'Jura, sans-serif', marginTop: 2 }}>
					Save
				</Button> */}
				</CardContent>
			</Card>
		</>
	);
}
