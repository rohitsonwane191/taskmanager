import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <>
   <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
      <div class="container-fluid" >
        <h4 class="navbar-brand" href="#">Taskmanager</h4>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
          </ul>
          <form className='justify-content-between'>
            <Link to="/Loregister"> <button class="btn btn-outline-success " >Register</button> </Link>
            <Link to="/login"> <button class="btn btn-outline-success" >Login</button> </Link>
          </form>
        </div>
      </div>
    </nav>
<h1 className='text-center'> welcome</h1>
    </div>
  </>
  )
}

export default Navbar