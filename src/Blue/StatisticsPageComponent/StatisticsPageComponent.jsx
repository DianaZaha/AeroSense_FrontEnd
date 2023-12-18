import { Box, Fab } from '@mui/material'
import React, { useState } from 'react'
import ChartComponent from './CharComponent/ChartComponent';
import AddIcon from '@mui/icons-material/Add';

export default function StatisticsPageComponent() {
  const [data, setData] = useState(1);
  
  const changeData = () =>
  {
    if(data === 1){
      setData(2);
    }
    if(data === 2){
      setData(1);
    }
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:"space-around", flexDirection: 'column', p: 1, m: 1, }}>
       
      <ChartComponent data={data}/>
      <Box sx={{display: 'flex', justifyContent:"space-around"}}>
      <Fab variant="extended" onClick={changeData} sx={{ size: '100%', background: "#FFFFFF", color: "#228B22"}} >
          <AddIcon/>
            Change Data
          </Fab>
      </Box>
      
    </Box>
  )
}
