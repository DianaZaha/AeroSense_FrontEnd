import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Alert, Collapse, FormGroup, Stack, TextField } from '@mui/material';
import { Delete, Save } from '@mui/icons-material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export default function RoutineDetails({supabase, routineDetails, title, userId, closeModal}) {
	const defaultRoutine = routineDetails;
	const [routine, setRoutine] = useState(routineDetails);

	const [openAlert, setAlertOpen] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
		return;
		}

		setAlertOpen(false);
	};

	const onChangeProperty = (property, value) => {
		setRoutine({
			...routine,
			[property]: value
		});
	};

	const onChangeState = (property, value) => {
		setRoutine({
			...routine,
			[property]: {
				id_measurement: routine[property].id_measurement,
				state: value
			}
		});
	};

	async function updateRoutine() {
		if(routine.name.length === 0 || routine.description.length === 0){
			setAlertOpen(true);
			return;
		}
		const { data } = await supabase.from('measurement').select('*');
		await supabase.from('routines').update([
			{
				name: routine.name,
				start_date: routine.start_date,
				end_date: routine.end_date,
				description: routine.description
			}
		]).eq('id_routine', routine.id_routine);
		await data.forEach(async (measurement) => {
			await supabase.from('routines_measurement').update(
				{state: routine[measurement.name].state}
			).eq('id_routine', routine.id_routine).eq('id_measurement', measurement.id_measurement);
		});
		closeModal();
	}

	async function createRoutine() {
		if(routine.name.length === 0 || routine.description.length === 0){
			setAlertOpen(true);
			return;
		}
		const { data } = await supabase.from('measurement').select('*');
		await supabase.from('routines').insert([
			{
				id_routine: routine.id_routine,
				id_user: userId,
				name: routine.name,
				start_date: routine.start_date,
				end_date: routine.end_date,
				description: routine.description
			}
		]);
		await data.forEach(async (measurement) => {
			await supabase.from('routines_measurement').insert([
				{id_routine: routine.id_routine, id_measurement: measurement.id_measurement, state: routine[measurement.name].state}
			]);
		});
		closeModal();
	}

	async function deleteRoutine() {
		await supabase.from('routines_measurement').delete().eq('id_routine', routine.id_routine);
		await supabase.from('routines').delete().eq('id_routine', routine.id_routine);
		await supabase.from('sensor').update({id_routine: null}).eq('id_routine', routine.id_routine);
		closeModal();
	}

	return (
		<>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Card sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
					<CardContent>
						<FormGroup sx={{ display: 'flex', justifyContent:'center', alignContent: 'center'}} key="form_measurements">
							<Collapse in={openAlert}>
								<Alert open={openAlert} onClose={handleClose} severity='error' sx={{ width: '100%' }}>
									One or more fields are empty!
								</Alert>
							</Collapse>
							<Typography variant="h5" key="name" sx={{ display: 'flex', justifyContent:'center', alignContent: 'center'}}>
								{title}
							</Typography>
							{title.includes('Create') &&
							<TextField key='routine-id' sx={{ marginTop: 2 }} 
								label='Routine ID' value={routine.id_routine} onChange={e => onChangeProperty('id_routine', e.target.value)} 
							/>
							}
							<TextField key='routine-name' sx={{ marginTop: 2 }} 
								label='Routine name' value={routine.name} onChange={e => onChangeProperty('name', e.target.value)} 
							/>
							<DateTimePicker label="Start date" sx={{ marginTop: 2 }} 
								value={dayjs(routine.start_date)} onChange={e => onChangeProperty('start_date', e)} 
							/>
							<DateTimePicker label="End date" sx={{ marginTop: 2 }} 
								value={dayjs(routine.end_date)} onChange={e => onChangeProperty('end_date', e)} 
							/>
							<TextField key='routine-description' sx={{ marginTop: 2 }} 
								label='Routine description' value={routine.description} onChange={e => onChangeProperty('description', e.target.value)} 
							/>
							<Typography variant="h5" key="measurements" sx={{ display: 'flex', justifyContent:'center', alignContent: 'center'}}>
								Measurements:
							</Typography>
							<FormControlLabel key="measurement_light" labelPlacement='start' control={
								<Checkbox key='light' checked={routine.light.state} onChange={e => onChangeState('light', e.target.checked)} />
							} label={'Light: '} />
							<FormControlLabel key="measurement_sound" labelPlacement='start' control={
								<Checkbox key='sound' checked={routine.sound.state} onChange={e => onChangeState('sound', e.target.checked)} />
							} label={'Sound: '} />
							<FormControlLabel key="measurement_temperature" labelPlacement='start' control={
								<Checkbox key='temperature' checked={routine.temperature.state} onChange={e => onChangeState('temperature', e.target.checked)} />
							} label={'Temperature: '} />
							<FormControlLabel key="measurement_humidity" labelPlacement='start' control={
								<Checkbox key='humidity' checked={routine.humidity.state} onChange={e => onChangeState('humidity', e.target.checked)} />
							} label={'Humidity: '} />
							<FormControlLabel key="measurement_co2" labelPlacement='start' control={
								<Checkbox key='co2' checked={routine.co2.state} onChange={e => onChangeState('co2', e.target.checked)} />
							} label={'CO2: '} />
							<FormControlLabel key="measurement_tvoc" labelPlacement='start' control={
								<Checkbox key='tvoc' checked={routine.tvoc.state} onChange={e => onChangeState('tvoc', e.target.checked)} />
							} label={'TVOC: '} />
						</FormGroup>
						<Stack spacing={5} direction="row" sx={{ display: 'flex', justifyContent:'center', alignContent: 'center'}}>
							{!title.includes('Create') && <Button variant="contained" color="error" startIcon={<Delete />} onClick={deleteRoutine}>
								Remove
							</Button>}
							<Button variant="contained" color="success" 
								disabled={JSON.stringify(defaultRoutine) === JSON.stringify(routine)}
								endIcon={<Save/>}
								onClick={async () => {
									if(title.includes('Create')){
										await createRoutine();
									} else {
										await updateRoutine();
									}
								}}
							>
								Save
							</Button>
						</Stack>
					</CardContent>
				</Card>
			</LocalizationProvider>
		</>
	);
}
