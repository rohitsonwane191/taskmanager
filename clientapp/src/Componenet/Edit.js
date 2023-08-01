import {  message } from 'antd';
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Edit = () => {
  const {id} =useParams();
  const[userdata,set]=useState({
    name:"",
    email:"",
    mobail:"",
    work:"",
    dsc:""
  });
  const navigate=useNavigate();
   const setdata=(e)=>{
    const {name,value}=e.target;
    set((preval)=>{
      return{
        ...preval,
        [name]:value
      }
    })
   }
   
   useEffect(()=>{
    const Getdata=async()=>{
      const res= await fetch(`/getuser/${id}`,{
        method:"GET",
        headers:{"content-type":"application/json"}
      });
      const data= await res.json();
      if(res.status===404 && !data){
        console.log(Error);
      }
      else{
        set(data);
        console.log("get data");
      }
     }
    Getdata();
   },[id]);

   const updateuser=async(e)=>{
e.preventDefault();
    const {name,email,mobail,work,dsc}=userdata;
    const res2= await fetch(`/updateuser/${id}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({name,email,mobail,work,dsc})
    })
    const data2= await res2.json();
  if(res2.status===404 && !data2){
    console.log(Error);
  }
  else{
    message.success("data updated");
    navigate(`/view/${id}`);
  }
   }

  return (
   <Card className='container-fluid col-6 border-dark '>
   <div id='main' className='container'>
    <div id='btn-1'>

<p id='updateData'> Update Data </p>
   <NavLink to="/home"><button className='btn btn-dark'>Home</button></NavLink>

    </div>
    <div>
      <form>
        <div className='row'>
        <div className='mb-3 col-lg-6 col-md-6 col-12'>
<label>name</label>
<input className='form-control' type='text'name='name' value={userdata.name} onChange={setdata} placeholder='enter name'/>
        </div>
        <div className='mb-3 col-lg-6 col-md-6 col-12'>
<label>email</label>
<input className='form-control' type='text'name='email' value={userdata.email} onChange={setdata} placeholder='enter email'/>
        </div>
        <div className='mb-3 col-lg-6 col-md-6 col-12'>
<label>mobail</label>
<input className='form-control' type='number' name='mobail' value={userdata.mobail} onChange={setdata} placeholder='enter mobail'/>
        </div>
        <div className='mb-3 col-lg-6 col-md-6 col-12'>
<label>work</label>
<input className='form-control' type='text' name='work' value={userdata.work} onChange={setdata} placeholder='enter work'/>
        </div>
        <div className='mb-3 col-lg-6 col-md-6 col-12'>
<label>dsc</label>
<input className='form-control' type='text'name='dsc' value={userdata.dsc} onChange={setdata} placeholder='enter dsc'/>
        </div>
        </div>
        <button id='submit-btn' type="submit" onClick={updateuser} className="btn btn-primary">Submit</button>
      
      </form>
    </div>
   </div>
   </Card>
  )
}

export default Edit