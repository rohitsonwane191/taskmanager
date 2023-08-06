import { Form, Input } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { message } from 'antd'
import { Spinner } from "react-bootstrap"
import axios from 'axios'
const Login = () => {
  const[lodig,setloding]=useState(false);
  const navigate=useNavigate();
 async function submitHandler(values){
try {
  setloding(true)
  const {data}=await axios.post("/login",values);
  setloding(false);
  message.success("Login successfully");
      localStorage.setItem("user",JSON.stringify({...data,password:""}));
  navigate("/home")
} catch (error) {
  
}
  }
  return (
    <>
    {lodig && <Spinner></Spinner> }
    <div id='bodys1' className='register-page'>
    <Form layout='vertical' onFinish={submitHandler}>
      <h1 id='logo' >Login</h1>
      <Form.Item label="Email" name="email">  
        <Input type='email' placeholder='user123@gmail.com' required/>
        </Form.Item> 
      <Form.Item label="Password" name="password">
        <Input   type='password' placeholder='Password' required />
        </Form.Item> 

<button id='btn1'>Login</button>
    </Form>
<br></br>
<Link to="/loregister" id='login-link'>Dont have an account ? register</Link>
   </div>
   </>
  )
}

export default Login