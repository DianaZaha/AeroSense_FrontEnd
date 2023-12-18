import React from 'react'
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import logo from './ImagesBlue/StatsDetail.png';
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
        //gap: '3em',
        alignItems: 'center',
        //padding: '240px',
    },
    /*content: {
      padding: '16px',
    },*/
    contentContainer: {
      maxWidth: '1000px', 
      display: 'flex',
      flexDirection: 'row',
      gap: '100px',
    },
    textContainer: {
      flex: 1, 
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
      flex: 1.5,
      maxWidth: '150%', 
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    picture: {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
    
}));

const PageDetails = () => {
    const classes = useStyles();
  return (
    <div className = {classes.root}>
      <div className={classes.contentContainer}>
      <Box className={classes.textContainer}>
          <h1 className={classes.header}>
          MEASURE THE HEALTH OF YOUR SURROUNDINGS IN REAL TIME
          </h1>
          <body2 className={classes.paragraph}>
          We will notify you each time one of our sensors detect a drop in your quality of life. All you have to do is keep an eye out for our tips!
          </body2>
          <Link to="/statistics">
            <Button className={classes.signUpButton} variant="contained" sx={{
                backgroundColor: '#105C00',
                color: '#ecebef',
                fontSize: '1.5em',
                '&:hover': {
                  backgroundColor: '#96be25',
                  color: '#105C00',
                },
              }}>
              Check Statistics
            </Button>
          </Link>
        </Box>
        {<Box className={classes.pictureContainer}>
          <img
            className={classes.picture}
            src={logo}
            alt="AeroSense_logo"
          />
        </Box>}
        
      </div>
    </div>
  )
}
export default PageDetails;