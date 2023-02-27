import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import { Link } from 'react-router-dom';

const tableStyle = {
  backgroundColor:'white',
  color:'#4615b2',
  fontWeight:'bold'
}
const coursesTableContainer = {
  border:"1px solid #834bff",
}
const tableDivStyle = {
  padding:"2rem",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column",
  fontWeight:"bold",
  color:"#4615b2"
}
const addAndSearchDiv = {
  width:"100%",
  display:"flex",
  justifyContent:"space-between",
  padding:"1rem"
}

const students = [
  {
    id: 1,
    username: "Khalil",
    email: "khalilAbbass@gmail.com",
  },
  {
    id: 2,
    username: "Hassan",
    email: "hassanabbas@gmail.com",
  },
  {
    id: 3,
    username: "Jamil",
    email: "jamilFayad@gmail.com",
  },
  {
    id: 4,
    username: "Ali",
    email: "aliabbas@gmail.com",
  },
];


const Students = () => {
  return (
    <div style ={tableDivStyle}>
      <div style={{display:"flex",justifyContent:"space-between",  width:"100%"}}>
        <Link style={{textDecoration:"none", display:"flex", justifyContent:"center", alignItems:"center"}} to='/courses'><ReplyIcon/><h4>Back to courses</h4></Link>
        </div>
      <h1>Students</h1>
      <div style={addAndSearchDiv}>
        <TextField id="outlined-basic" label="Search Students" variant="outlined" />
        <Button style={{backgroundColor:"#651fff"}} variant='contained'>Enroll A Student</Button>
      </div>
    <TableContainer style={coursesTableContainer} component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell style={tableStyle} align="center">StudentId</TableCell>
          <TableCell style={tableStyle} align="center">UserName</TableCell>
          <TableCell style={tableStyle} align="center">Email</TableCell>
          <TableCell style={tableStyle} align="center">Tools</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((item) => (
          <TableRow
            key={item.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center" >
              {item.id}
            </TableCell>
            <TableCell   align="center">{item.username}</TableCell>
            <TableCell   align="center">{item.email}</TableCell>
            <TableCell  align="center">
                <Button variant='contained' style={{backgroundColor:"red" , margin:"2px"}}>UnEnroll student</Button>
            </TableCell>
          
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</div>
  )
}

export default Students