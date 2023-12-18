import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Box } from '@mui/material';
import PremiumImage from './ImagesBlue/premium.png';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Jura',
    height: '65vh',
    overflowY: 'auto',
    backgroundColor: '#105C00',
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
    color: "#ecebef",
  },
  paragraph: {
    fontSize: '1.75em',
    fontWeight: 'bold',
    marginBottom: '100px',
    marginTop: '70px',
    color: "#ecebef",
  },
  signUpButton: {
    fontSize: '1.5em',
  },
  pictureContainer: {
    flex: 1,
    maxWidth: '200%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  picture: {
    width: '170%',
    height: 'auto',
    display: 'block',
  },
}));

const GoPremium_Card = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <Box className={classes.pictureContainer}>
          <img className={classes.picture} src={PremiumImage} alt="Premium" />
        </Box>
        <Box className={classes.textContainer}>
          <h1 className={classes.header} >
            SHARE THE CARE WITH THOSE AROUND YOU
          </h1>
          <p className={classes.paragraph}>
            Become a Manager and access data for more than one room. Use our
            data to keep all the people in your life safe. A good environment
            benefits everyone!
          </p>
          <Button
            className={classes.signUpButton}
            variant="contained"
            sx={{
              backgroundColor: '#ecebef',
              color: '#105C00',
              fontSize: '1.5em',
              '&:hover': {
                backgroundColor: '#96be25',
                color: '#ecebef',
              },
            }}
          >
            GO PREMIUM
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default GoPremium_Card;
