import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {

  const [numberUsers, setNumberUsers] = useState(0);
  const [numberTodos, setNumberTodos] = useState(0);
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    setNumberUsers(users.length)
  }, [])
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    setNumberTodos(todos.length)
  }, [])


  return (
    <main className='d-flex justify-content-center align-items-center mx-auto'>
      <div className="conatiner text-center">
<h1>WELCOME TO TASK VAULT</h1>
<br />
      <div className="row">

  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card" style={{maxWidth:'400PX'}}>
      <div className="card-body">
        <h5 className="card-title">USERS</h5>
        <p className="card-text">Number of Users: {numberUsers}</p>
        <Link to='About' className="btn btn-primary">USERS</Link>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card" style={{maxWidth:'400PX'}}>
      <div className="card-body">
        <h5 className="card-title">TODO LIST</h5>
        <p className="card-text">Number of Todos: {numberTodos}</p>
        <Link to='todolist' className="btn btn-primary">TODOS</Link>
      </div>
    </div>
  </div>
</div>
      </div>
    </main>
  )
}
