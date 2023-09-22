import { Button, message } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router'
import Logout from '../nav/Logout.js';
import { Link} from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Home = () => {
  const [getuserdata,setdata]=useState([]);
   
  const navigate=useNavigate();
  
  const Getdata=async()=>{
const res=await fetch("/getdata",{
  method:"GET",
  headers:{"content-type":"application/json"}
})
const data= await res.json();
if(res.status===404 && !data){
  console.log(Error);
}
else{
  setdata(data)
  console.log("getdata");
}
  }
  useEffect(()=>{
    Getdata();
  },[]);


const deleteuser=async(id)=>{
const res2= await fetch(`/deletedata/${id}`,{
  method:"DELETE",
  headers:{"content-type":"application/json"}
})
const data2= await res2.json();
if(res2.status===404 && !data2 ){
  console.log("deleted data");
}
else{
  message.success("deleted data")
  navigate("/home");
}
Getdata();
}

  return (
    <>
    <Logout/>
<Card>
&nbsp;
&nbsp;
<div className='container-fluid '> 
&nbsp;
<Link to="/Register">
<Button className='btn btn-success mb-2'>Add Data</Button>
</Link>
<table className='table'>
  <thead>
    <tr className='table-dark'>
      <th>ID</th>
      <th>NAME</th>
      <th>EMAIL</th>
      <th>MOBIlE</th>
      <th>Action</th>
    </tr>
  </thead>

<tbody>
  {getuserdata.map((value,id)=>{
    return(
    <>
      <tr>
      <th>{id+1}</th>
      <th>{ value.name}</th>
      <th>{ value.email}</th>
      <th>{ value.mobail}</th>
      <td className="d-flex justify-content-between">
        <Link to={`/view/${value._id}`}><Button variant='success' >view</Button></Link>
        <Link to={`/edit/${value._id}`}><Button  >update</Button></Link>
        <button className="btn btn-danger" onClick={()=>{deleteuser(value._id)}}>delete</button>

      </td>
    </tr>
    </>
    )
  })}
</tbody>
</table>


</div>
 

</Card>
</>  )
}

export default Home