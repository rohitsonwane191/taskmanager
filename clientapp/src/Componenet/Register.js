import { Form, Spin, message } from 'antd'
import Input from 'antd/es/input/Input'
import axios from 'axios'
import React, { useState } from 'react'
// import { Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
  const [loding,setloding]=useState(false);
  const navigate=useNavigate();
  const submitHandler=async(values)=>{
try {
  setloding(true)
  await axios.post("/save",values);
  message.success("registretion successfully");
  setloding(false);
  navigate("/home")
} catch (error) {
  setloding(false)
  message.error("registration unsucessfuly");
}
  }
  return (
 <>
 <div id='bodys'>
  {loding && <Spin tip="loading... please waite some time" size='large'className='mb-4' />}
  
 <Form layout='vertical' onFinish={submitHandler}>
      <h1 id='log' className='text text-danger text-center'>Register</h1>
      <Form.Item  label="Name" name="name">
        <Input type='name' placeholder='enter the name' required/>
        </Form.Item> 
      <Form.Item label="Email" name="email">  
      
        <Input type='email' placeholder='user123@gmail.com' required/>
        </Form.Item> 
      <Form.Item label="Mobile" name="mobail">
        <Input   type='Number' placeholder='enter your Mobile number' required />
        </Form.Item> 
      <Form.Item label="work" name="work">
        <Input   type='name' placeholder='enter your work' required />
        </Form.Item> 
      <Form.Item label="description" name="dsc">
        <Input   type='name' placeholder='decription' required />
        </Form.Item> 
<button id='btn2'>Register</button>
    </Form>
<br></br>
<Link to="/Login" id='RegisterLink'>Dont have an account ? register</Link>
   </div>
 </>
  )
}

export default Register