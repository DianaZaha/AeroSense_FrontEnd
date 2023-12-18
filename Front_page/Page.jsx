import { makeStyles } from '@mui/styles';
import { CssBaseline, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import "./FrontPage.css"
import bgImage from './ImagesBlue/plant_pots.jpg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Grow } from '@mui/material';
import PageDetails from "./PageDetails.jsx"
import { useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import PageDSens from "./PageDetails2_Sensors";
import PageDStats from "./PageDetails3_Stats";
import GoPremium from './PageDetails_Premium';
import Header from './HeaderHome'
import QrCode from './QRcode';

/*
1. MUI STYLES NEEDS TO BE ISNTALLED
2. ADD THIS IN INDEX.JSX FOLDER, ABOVE THE ROOT (it will import the fonts used):

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap';
document.head.appendChild(link);
link href="https://fonts.googleapis.com/css2?family=Jura:wght@300&display=swap";
document.head.appendChild(link);

3. npm i react-scroll

!!!! e posibil sa fi uitat unele librarii la cum am tot modificat, vi se va zice in erori cand dati run ce tb instalat

*/

const Background = ({ children }) => {
    return (
      <>
      <CssBaseline/>
      
      <div
        style={{
          background: `url(${bgImage})`,
          backgroundSize: 'cover',
          minHeight: '100vh',
          minWidth: '100vw',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          //backgroundSize:"contain" ,
          //alignItems: 'flex-start', 
          //justifyContent: 'center', 
          //display: 'flex',
          //flexDirection: 'column',
          //width: '100',
          //height: '100',
          //paddingTop: '1vh',
          margin: 0,
        }}

      >
        {children}
       
      </div>
      </>
    );
  };
  
const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    //alignItems: 'center',
    height: '100vh',
  },
  title:{
    width: '100%',
    height: '100%',
    textAlign: 'center',
    color: '#105C00',
    fontSize: 90,
    fontFamily: 'Julius Sans One',
    fontWeight: '400',
    wordWrap: 'break-word',
  },
  subtitle:{
    color: '#105C00',
    fontSize: 40,
    fontFamily: 'Jura',
    fontWeight: '400',
    textAlign: 'center',
    wordWrap: 'break-word',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    //alignItems: 'center',
  },
  godown:{
    color: '#105C00',
  },
  iconButtonDown:{
    width: '100%',
    height: '70%',
  },
}));

const App = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(()=>{
    setChecked(true);
  }, [])

  const pageDetailsRef = useRef(null);

  const scrollToPage = () => {
    scroll.scrollTo(pageDetailsRef.current.offsetTop, {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    
    <div>
      
    <Background>
    <Header/>
      <div className = {classes.root}>
        <Grow in = {checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight ={15}>
        <div className={classes.container}>
          <div>
            <h1 className = {classes.title}>
              AeroSense
            </h1>
            <h5 className = {classes.subtitle}>
              Care for your environment. Care for yourself
            </h5>  
            <IconButton className={classes.iconButtonDown} onClick = {scrollToPage}>
              <KeyboardArrowDownIcon className = {classes.godown} style={{ fontSize: '3em' }}/>
            </IconButton>
          </div>
        </div>
        </Grow>    
      </div>
      
    </Background>
    <PageDetails scrollToPage={pageDetailsRef}/>
    <PageDSens/>
    <PageDStats/>
    <GoPremium/>
    <QrCode/>
    
    </div>
    
  );
};

export default App;
  