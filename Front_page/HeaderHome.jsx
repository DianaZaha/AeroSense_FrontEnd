import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



const HeaderHome = () => {
  return (
    <div style={{ zIndex: 1000 }}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', marginBottom: 0 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="#105C00"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#105C00' }}>
            AeroSense
          </Typography>
          <Button color="inherit" sx={{ color: '#105C00' }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}

export default HeaderHome;