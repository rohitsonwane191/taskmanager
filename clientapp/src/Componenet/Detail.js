import { message } from 'antd';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router';

const Detail = () => {
  const {id}=useParams("");
  const [getdata,setdata]=useState({
   
  });
  // const navigate=useNavigate();
 
  
  useEffect(()=>{

    const Getdata=async()=>{
      const res=await fetch(`/getuser/${id}`,
      {
        method:"GET",
        headers:{"content-type":"application/json"}
      })
      const data= await res.json();
      if(res.status===404 && !data){
        console.log("not getted");
      } 
      else{
        setdata(data);
        console.log("geted");
      }
    }
    Getdata();
  },[id]);
const navigate=useNavigate();
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
  }
  
  return (
    <> 
    <h3 className='text text-center'> welcome</h3>
      <Card className='container-fluid col-7'>
      <Card.Header className='d-flex justify-content-between'>
      <Link to={`/edit/${id}`}> <Button className='btn btn-primary'> update </Button></Link>
      <Link to="/home"> <Button className='btn btn-dark'> Home </Button></Link> 
         <Link> <Button className='btn btn-danger' onClick={()=>{deleteuser(id)}}> Delete</Button></Link>  
         
             </Card.Header>
      <Card.Body className='row '>
    <div className='d-flex'>
      <tr >NAME ___________{getdata.name}</tr>
    </div>
    <div className='d-flex'>
      <tr >EMAIL ___________{getdata.email}</tr>
    </div>
    <div className='d-flex'>
      <tr >MOBAIL ___________{getdata.mobail}</tr>
    </div>
    <div className='d-flex'>
      <tr >WORK ___________{getdata.work}</tr>
    </div>
    <div className='d-flex'>
      <tr >dscription ___________{getdata.dsc}</tr>
    </div>
      </Card.Body>
    </Card>
    </>
  )
}

export default Detail