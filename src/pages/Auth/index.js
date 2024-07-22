import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import ForgotPassword from './ForgotPassword'

export default function Auth() {
  return (
    <Routes>
      <Route path='login' element={<Login/>} />
      <Route path='Register' element={<Register/>} />
      <Route path='ForgotPassword' element={<ForgotPassword/>} />
      <Route path='*' element={<h1>Auth page not found. 404 error</h1>} />
    </Routes>
  )
}
