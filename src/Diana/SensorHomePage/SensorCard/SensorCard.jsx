import { React, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SensorsIcon from '@mui/icons-material/Sensors';
import Modal from '@mui/material/Modal';
import SensorDetailsComponent from '../../SensorDetailsComponent/SensorDetailsComponent';
import useScreenSize from '../../../useScreenSize';

export default function SensorCard({ Name, Id, supabase, setDeleteSensorAlerState }) {

  const screenWidth = useScreenSize().width;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: (screenWidth * 80) / 100,
    bgcolor: 'background.paper', boxShadow: 24, p: 4,
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Sensor's Name: {Name} <br />
          ID: {Id}
        </Typography>
        <SensorsIcon></SensorsIcon>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen}>Sensor Details</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>

              <SensorDetailsComponent SensorName={Name} ID={Id} supabase={supabase} onClose={handleClose} setDeleteSensorAlerState={setDeleteSensorAlerState} />
            </Box>
          </Modal>
      </CardActions>
    </Card>
  );
}
