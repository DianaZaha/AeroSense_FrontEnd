import React from 'react'
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import logo from './ImagesBlue/SensorsDetail.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root:
    {
        fontFamily: 'Jura',
        height: '65vh',
        overflowY: 'auto',
        backgroundColor: '#ecebef',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    contentContainer: {
      maxWidth: '1000px', 
      display: 'flex',
      flexDirection: 'row',
      gap: '200px',
    },
    textContainer: {
      flex: 1.5, 
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      fontSize: '2.5em',
      fontWeight: 'bold',
      marginBottom: '16px',
    },
    paragraph: {
      fontSize: '1.75em',
      fontWeight: 'bold',
      marginBottom: '100px',
      marginTop: '70px',
    },
    signUpButton: {
      fontSize: '1.5em',
    },
    pictureContainer: {
      flex: 1,
      maxWidth: '150%', 
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    picture: {
      width: '150%',
      height: 'auto',
      display: 'block',
    },
    
}));

const PageDetails2_Sensors = () => {
    const classes = useStyles();
    
  return (
    <div className = {classes.root}>
      <div className={classes.contentContainer}>
        
        {<Box className={classes.pictureContainer}>
          {}
          <img
            className={classes.picture}
            src={logo}
            alt="AeroSense_logo"
          />
        </Box>}
        <Box className={classes.textContainer}>
          <h1 className={classes.header}>
            LEARN HOW TO BETTER OPTIMIZE THE WORLD AROUND YOU
          </h1>
          <body2 className={classes.paragraph}>
            Keep track of some of the most important aspects of your health, from air quality to sunlight exposure.
          </body2>
          <Link to="/sensors">
            <Button className={classes.signUpButton} variant="contained" sx={{
                backgroundColor: '#105C00',
                color: '#ecebef',
                fontSize: '1.5em',
                '&:hover': {
                  backgroundColor: '#96be25',
                  color: '#105C00',
                },
              }}>
              Check out your sensors
            </Button>
          </Link>
        </Box>
      </div>
    </div>
  )
}
export default PageDetails2_Sensors;