import * as React from 'react';
import { makeStyles } from '@mui/styles'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import qr from './ImagesBlue/QR_AS.png'


const useStyles = makeStyles((theme) => ({
    root:
    {
        height: '50vh',
        overflowY: 'auto',
        backgroundColor: '#ecebef',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default function ActionAreaCard() {
    const classes = useStyles();
  return (
    <div className= {classes.root}>
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="70%"
          image={qr}
          alt="QR_AeroSense"
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div"  fontFamily= 'Jura' wordWrap = 'break-word'>
            Don’t lose touch with your health!
          </Typography>
          <Typography variant="h5" color="105C00"  fontFamily= 'Jura' wordWrap = 'break-word'>
            Download AEROSENSE on your mobile
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}