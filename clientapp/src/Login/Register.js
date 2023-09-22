import React, { useState } from 'react'
import { Form, message } from "antd"
import Input from 'antd/es/input/Input'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
const Register = () => {
const navigate=useNavigate();
const [loding,setloging]=useState(false)
const   submitHandler=async(values)=>{
try {
  setloging(true);
  await axios.post("/register",values);
  message.success("Registration successfully");
  setloging(false)
  navigate("/Login")
} catch (error) {
  setloging(false)
  message.error("Registration not  successfully");
}
  }
  return (

  <>
  
  {loding && <Spinner></Spinner>}
<div id='RegisterBodys' className='register-page'>
    <Form layout='vertical' onFinish={submitHandler}>
      <h1 id='log' className=' text text-danger' style={{textAlign:"center"}}>Register</h1>
      <Form.Item label="Name " name="name">
        <Input type='name' placeholder='enter the name' required/>
        </Form.Item> 
      <Form.Item label="Email" name="email">  
        <Input type='email' placeholder='user123@gmail.com' required/>
        </Form.Item> 
      <Form.Item label="Password" name="password">
        <Input   type='password' placeholder='Password' required />
        </Form.Item> 
      <Form.Item label="Mobile" name="mobail">
        <Input   type='number' placeholder='mobail' required />
        </Form.Item> 
<button id='btn2'>Register</button>
    </Form>
<br></br>
<Link to="/Login" id='Register-link' style={{color:'black'}}>Dont have an account ? Login</Link>
   </div>
  </>
  )
}

export default Register