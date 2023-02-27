import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const loginContainer = {
    backgroundColor:"#834bff",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    height:"100vh",
   
}
const loginDivStyle = {
    justifyContent:"center",
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    backgroundColor:"white",
    gap:"20px",
    padding:"4rem"
   
}

const Login = () => {
  return (
    <div style={loginContainer}>
        <h1 style={{color:"white"}}>Login</h1>
        <div style={loginDivStyle}>
                 <TextField id="outlined-basic" label="Username" variant="outlined" />
                 <TextField id="outlined-basic" type="Password" label="password" variant="outlined" />
                 <p style={{color:"red"}}>Error</p>
                 <Button style={{color:"white" , backgroundColor:"#651fff"}} variant="contained">Login</Button>
                 <h5>Dont have an account ?<Link to="/register">Register</Link></h5>
        </div>
    </div>
  )
}

export default Login