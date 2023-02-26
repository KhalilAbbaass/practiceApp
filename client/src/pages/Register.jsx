import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const registerContainer = {
    backgroundColor:"#834bff",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    height:"100vh",
   
}
const registerDivStyle = {
    justifyContent:"center",
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    backgroundColor:"white",
    gap:"20px",
    padding:"4rem"
   
}

const Register = () => {
  return (
    <div style={registerContainer}>
        <h1 style={{color:"white"}}>Register</h1>
        <div style={registerDivStyle}>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-basic" label="Username" variant="outlined" />
                <TextField id="outlined-basic" type="Password" label="password" variant="outlined" />
                <p style={{color:"red"}}>Error</p>
                <Button style={{color:"white" , backgroundColor:"#651fff"}} variant="contained">Register</Button>
                <h5>Already have an account ?<Link to="/login">Login</Link></h5>
        </div>
    </div>
  )
}

export default Register