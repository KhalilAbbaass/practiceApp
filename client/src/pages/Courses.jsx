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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';


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
const clickableCell = {
  cursor:"pointer"
}
const courses = [
  {
    id: 1,
    title: "Lorem ipsum ",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    count:"23"
  },
  {
    id: 2,
    title: "Lorem ipsum ",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
   count:"28"
  },
  {
    id: 3,
    title: "Lorem ipsum ",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    count:"15"
  },
  {
    id: 4,
    title: "Lorem ipsum ",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    count:"32"
  },
];


const Courses = () => {

const navigate = useNavigate();
const handleNavigate = (id) => {
  navigate(`/students/${id}`)
}

  return (
    <div style ={tableDivStyle}>
      <h1>Courses</h1>
      <div style={addAndSearchDiv}>
        <TextField id="outlined-basic" label="Search" variant="outlined" />
        <Button style={{backgroundColor:"#651fff"}} variant='contained'>Add</Button>
      </div>
    <TableContainer style={coursesTableContainer} component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell style={tableStyle} align="center">CourseId</TableCell>
          <TableCell style={tableStyle} align="center">Title</TableCell>
          <TableCell style={{width:"50%" ,backgroundColor:'white',color:'#4615b2',fontWeight:'bold'}} align="center">Course Description</TableCell>
          <TableCell style={tableStyle} align="center">Count</TableCell>
          <TableCell style={tableStyle} align="center">Image</TableCell>
          <TableCell style={tableStyle} align="center">Tools</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {courses.map((item) => (
          <TableRow
            key={item.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center" onClick={() => handleNavigate(item.id)} style={clickableCell} >
              {item.id}
            </TableCell>
            <TableCell onClick={() => handleNavigate(item.id)} style={clickableCell} align="center">{item.title}</TableCell>
            <TableCell onClick={() => handleNavigate(item.id)} style={clickableCell}  align="center">{item.desc}</TableCell>
            <TableCell onClick={() => handleNavigate(item.id)} style={clickableCell}  align="center">{item.count}</TableCell>
            <TableCell onClick={() => handleNavigate(item.id)} style={clickableCell}  align="center">
              <img style={{ height:'40px',width:'auto'}} src={item.img} alt=""></img>
            </TableCell>
            <TableCell  align="center">
                <Button style={{color:"#4615b2" , margin:"2px"}}><EditIcon/></Button>
                <Button style={{color:"red" , margin:"2px"}}><DeleteIcon/></Button>
            </TableCell>
          
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</div>
  )
}

export default Courses