import React from 'react'
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import logo from './ImagesBlue/AeroSense_Logo.png';
import { Fade } from '@mui/material';

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

const PageDetails = ({ scrollToPage }) => {
    const classes = useStyles();
  return (
    <div className = {classes.root} ref={scrollToPage}>
      <Fade in={scrollToPage} timeout={1000}>
      <div className={classes.contentContainer}>
        <Box className={classes.textContainer}>
          <h1 className={classes.header}>
            A HEALTHY ENVIRONMENT FOR A HEALTHY MIND
          </h1>
          <body2 className={classes.paragraph}>
            We believe in practices that connect your mental and physical health
            to the health of our planet. Make the best of your surroundings by
            using our product!
          </body2>
          <Button className={classes.signUpButton} variant="contained" sx={{
              backgroundColor: '#105C00',
              color: '#ecebef',
              fontSize: '1.5em',
              '&:hover': {
                backgroundColor: '#96be25',
                color: '#105C00',
              },
            }}>
            Sign Up Now
          </Button>
        </Box>
        {<Box className={classes.pictureContainer}>
          {}
          <img
            className={classes.picture}
            src={logo}
            alt="AeroSense_logo"
          />
        </Box>}
      </div>
      </Fade>
    </div>
  )
}
export default PageDetails;