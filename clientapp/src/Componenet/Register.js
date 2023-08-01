import { Form, message } from 'antd'
import Input from 'antd/es/input/Input'
import axios from 'axios'
import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'
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
 <div id='bodys' >
  {loding && <Spinner/>}
  
 <Form layout='vertical' onFinish={submitHandler}>
      <h1 id='log' className='text text-danger'>Register</h1>
      <Form.Item label="Nmae" name="name">
        <Input type='name' placeholder='enter the name' required/>
        </Form.Item> 
      <Form.Item label="Email" name="email">  
      
        <Input type='email' placeholder='user123@gmail.com' required/>
        </Form.Item> 
      <Form.Item label="mobail" name="mobail">
        <Input   type='Number' placeholder='mobail' required />
        </Form.Item> 
      <Form.Item label="work" name="work">
        <Input   type='name' placeholder='work' required />
        </Form.Item> 
      <Form.Item label="dsc" name="dsc">
        <Input   type='name' placeholder='dscription' required />
        </Form.Item> 
<button id='btn'>Register</button>
    </Form>
<br></br>
<Link to="/Login" style={{color:'black'}}>Dont have an account ? register</Link>
   </div>
 </>
  )
}

export default Register