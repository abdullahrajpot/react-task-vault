import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  const [state, setstate] = useState({ name: '', email: '', password: '' });

  let handlechange = e => setstate(s => ({ ...s, [e.target.name]: e.target.value }));
  let navigate= useNavigate();

  const handleregister = e => {
    e.preventDefault();
    let { name, email, password } = state;
    if (!name || !email || !password)
      return toast.error("Enter all fields correctly", { position: "bottom-left" });

    const formData = { name, email, password };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let userFound = users.find(user => user.email === email);
    if (userFound) {
      toast.error("User already exists", { position: "bottom-left" });
      return;
    } else {
      users.push(formData);
      localStorage.setItem('users', JSON.stringify(users));
      toast.success("User Registered successfully", { position: "bottom-left" });
      navigate("/Auth/Login")
    }
  }

  return (
    <main className='d-flex justify-content-center align-items-center mx-auto'>
      <div className="container ">
        <div className="row">
          <div className="col">
            <div className="card p-5 " style={{ maxWidth: '450px' }}>
              <h1>Register</h1>
              <p>Let's Start with Us!</p>
              <hr />
              <form onSubmit={handleregister}>
                <div className="row">
                  <div className="col col-12 mb-2">
                    <label htmlFor="name" className='mb-1'>Name</label>
                    <input type="text" name='name' className='form-control' onChange={handlechange} />
                  </div>
                  <div className="col col-12 mb-2">
                    <label htmlFor="email" className='mb-1'>Email</label>
                    <input type="email" name='email' className='form-control' onChange={handlechange} />
                  </div>
                  <div className="col col-12 mb-2">
                    <label htmlFor="password" className='mb-1'>Password</label>
                    <input type="password" name='password' className='form-control' onChange={handlechange} />
                  </div>
                  <div className="col col-12 mb-2">
                    <button id='registerbutton' type='submit' className='btn btn-primary w-100 mb-1'>Register</button>
                    <p>Already Have an Account? <Link to='/Auth/Login' style={{ textDecoration: 'none', color: 'black' }}>Login</Link></p>
                  </div>
                </div>
              </form>
      <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
