import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [state , setstate] = useState({email:'', password:''})
  let handlechange = e =>setstate( s => ({...s, [e.target.name]: [e.target.value] }))
  let navigate= useNavigate();

  const handleLogin = e => {
    e.preventDefault();
let {email,password}=state;
if ( !email && !password)
  return toast.error("Enter all fields correctly", { position: "bottom-left" });



let users = JSON.parse(localStorage.getItem('users')) || [];
let userFound = users.find(user => user.email === email && user.password === password);

if (!userFound) {
  toast.success("Successfully login", { position: "bottom-left" });
  navigate("/")
} else {
  toast.error("User not Found", { position: "bottom-left" });
}

    

  }

  return (
    <main className='d-flex justify-content-center align-items-center'>
      <div className="conatiner ">
        <div className="row">
          <div className="col">
            <div className="card p-5 " style={{ maxWidth: '450px' }}>
              <h1>Login</h1>
              <p>Welcome Back!</p>
              <hr />
              <form  onSubmit={handleLogin}>
                <div className="row">
                  <div className="col col-12 mb-2">
                    <label htmlFor="email" className='mb-1' >Email</label>
                    <input type="email" name='email' className='form-control' onChange={handlechange} />
                  </div>
                  <div className="col col-12 mb-2">
                    <label htmlFor="email" className='mb-1' >Password</label>
                    <input type="Password" name='password' className='form-control' onChange={handlechange} />
                    <Link to='/Auth/Forgotpassword' id='forgotpassowrdbtn' className='forgotpasswordtbn mb-1' style={{ textDecoration: 'none', color: 'black', display: 'flex', float: 'right' }} >Forgot Password</Link>
                  </div>

                  <div className="col col-12 mb-2">
                    <button id='loginbutton' type='submit' className='btn btn-primary w-100 mb-1' >Login</button>
                    <p>Don't Have an Account? <Link to='/Auth/Register' style={{ textDecoration: 'none', color: 'black' }}>Register Now!</Link></p>
                  </div>

                </div>

              </form>
              <ToastContainer />

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
