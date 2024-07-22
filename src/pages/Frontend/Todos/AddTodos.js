import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddTodos() {

//   const randomid = () =>{
//     let randomid ="";
//    let limit = 8
//    let possibleid="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
//    for(let i=0;i<=limit;i++){
//        let randomNumber =Math.random()
//        randomid += possibleid.charAt(Math.floor(randomNumber * possibleid.length))

//    }
//    return randomid

   
// }

  const [state, setstate] = useState({ title: '', description: '', dateCreated: '', status: "incomplete",  location: '' });

  let handlechange = e => setstate(s => ({ ...s, [e.target.name]: e.target.value }));
  let navigate = useNavigate();

  const handleAddTodo = e => {
    e.preventDefault();
    let { title, description, dateCreated, status, location } = state;
    const id = '_' + Math.random().toString(36).slice(2);

    if (!title || !description || !dateCreated || !location) {
      return toast.error("Enter all fields correctly", { position: "bottom-left" });
    }

    const formData = { title, description, dateCreated, id, status, location };

    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    let todoFound = todos.find(todo => todo.title === title);
    if (todoFound) {
      toast.error("Task already exists", { position: "bottom-left" });
    } else {
      todos.push(formData);
      localStorage.setItem('todos', JSON.stringify(todos));
      toast.success("Task Added successfully", { position: "bottom-left" });
      navigate("/todos");
    }
  };

  return (
    <main className='d-flex justify-content-center align-items-center mx-auto'>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card px-5 py-3" style={{ maxWidth: '450px' }}>
              <h1>Add Todos</h1>
              <p>Add your Task Here.</p>
              <hr />
              <form onSubmit={handleAddTodo}>
                <div className="row">
                  <div className="col col-12 mb-2">
                    <input type="text" name='title' placeholder='Title' className='form-control' onChange={handlechange} />
                  </div>
                  <div className="col col-12 mb-2">
                    <input type="text" name='description' placeholder='Description' className='form-control' onChange={handlechange} />
                  </div>
                  <div className="col col-12 mb-2">
                    <input type="date" name='dateCreated' className='form-control' onChange={handlechange} />
                  </div>
                  <div className="col col-12 mb-2">
                    <input type="text" name='location' placeholder='Location' className='form-control' onChange={handlechange} />
                  </div>
                  <div className="col col-12 mb-2">
                    <button id='todobutton' type='submit' className='btn btn-primary w-100 mb-1'>Submit</button>
                    <p>To Check "Todo List" <Link to='/todolist' style={{ textDecoration: 'none', color: 'black' }}>Click Here</Link></p>
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
