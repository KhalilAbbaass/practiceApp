import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const loginLinkStyle = {
    textDecoration:"none",
    color:"white"
}

const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{backgroundColor:"#651fff"}} position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    PracticeApp
                </Typography>
                <Button  color="inherit"><Link style={loginLinkStyle} to='/login'>Login</Link></Button>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}

export default Navbar