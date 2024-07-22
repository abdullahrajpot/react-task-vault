import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ForgotPassword() {

  let [state, setState] = useState({ email: "", newPassword: "", confirmPassword: "" });
  let navigate = useNavigate()
  const handlechange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }));

  const handleforgotpassword = e => {
    e.preventDefault();

    const { email, newPassword, confirmPassword } = state
    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (!email || !newPassword) return toast.error("Please fill all inputs correctly!", { position: "bottom-left" })

    let userExists = users.find(user => user.email === email);
    let passwordFound = users.find(user => user.password === newPassword)
    if(passwordFound) return toast.error("Your new Password is same as old one",{position:"bottom-left"})
    if (!userExists) return toast.error("User not found", { position: "bottom-left" })
    if (newPassword !== confirmPassword) return toast.error("Passwords not match", { position: "bottom-left" })

    users = users.map(user => user.email === email ? { ...user, password: newPassword } : user)
    localStorage.setItem("users", JSON.stringify(users));
    toast.success("Password updated succesfully", { position: "bottom-left" })
    navigate("/Auth/Login")
  }




  return (






    <main className='d-flex justify-content-center align-items-center'>
    <div className="conatiner ">
      <div className="row">
        <div className="col">
          <div className="card p-5 " style={{ maxWidth: '450px' }}>
            <h1>Forgot Password</h1>
            <p>Lets Start with Us!</p>
            <hr />
            <form  onSubmit={handleforgotpassword}>
              <div className="row">
                <div className="col col-12 mb-2">
                  <label htmlFor="emial" className='mb-1' >Email</label>
                  <input   id='forgotemail' type="email" name='email' className='form-control' onChange={handlechange} />
                </div>
                <div className="col col-12 mb-2">
                  <label htmlFor="newPassword" className='mb-1' > New Password</label>
                  <input id='newPassword' type="Password" name='newPassword' className='form-control'  onChange={handlechange} />

                </div>
                <div className="col col-12 mb-2">
                  <label htmlFor="confirmPassword" className='mb-1' >Confirm Password</label>
                  <input id='confirmPassword' type="Password" name='confirmPassword' className='form-control'  onChange={handlechange} />

                </div>

                <div className="col col-12 mb-2">
                  <button id='forgotbutton' type='submit' className='btn btn-primary w-100 mb-1' >Forgot Password</button>
                </div>

              </div>

            </form>
            <ToastContainer/>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}
