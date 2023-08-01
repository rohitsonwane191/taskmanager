import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './Login/Login.js'
import Navbar from './nav/Navbar.js'
import Logout from './nav/Logout.js'
import LoRegister from './Login/Register.js'
import Home from './Componenet/Home.js'
import Edit from './Componenet/Edit.js'
import Detail from './Componenet/Detail.js'
import Register from './Componenet/Register.js'

const App = () => {
  return (
   <Routes>
    <Route exact path='/' Component={Navbar} />
    <Route exact path='/LogOut' Component={Logout} />
    <Route exact path='/LoRegister' Component={LoRegister} />
    <Route exact path='/Login' Component={Login} />
    <Route exact path='/home' Component={Home} />
    <Route exact path='/edit/:id' Component={Edit} />
    <Route exact path='/view/:id' Component={Detail} />
    <Route exact path='/Register' Component={Register} />
    
   </Routes>
  )
}

export default App