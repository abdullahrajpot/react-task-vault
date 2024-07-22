import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
  <div className="container">
    <a className="navbar-brand" >Routes</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/About' className="nav-link " aria-current="page" >Users</Link>
        </li>
        
        <li className="nav-item">
          <Link to='addtodo' className="nav-link " aria-current="page" >Todos</Link>
        </li>
        <li className="nav-item">
          <Link to='todolist' className="nav-link " aria-current="page" >Todos List</Link>
        </li>
        
        <li className="nav-item dropdown">
          <button className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" >
        Auth
          </button>
          <ul className="dropdown-menu">
            <li><Link to= '/Auth/Login' className="dropdown-item" >Login</Link></li>
            <li><Link to='/auth/register' className="dropdown-item" >Register</Link></li>
            <li><Link to='/auth/forgotpassword' className="dropdown-item" >ForgotPassword</Link></li>
          </ul>
        </li>
        
      </ul>
    
    </div>
  </div>
</nav>

    </header>
  )
}
