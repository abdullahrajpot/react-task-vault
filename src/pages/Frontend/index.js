import React from 'react';
import Header from '../../components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

import About from './About';

import Footer from '../../components/Footer'
import AddTodos from './Todos/AddTodos';
import TodosList from './Todos';


export default function Frontend() {
  return (
<>
   <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
    
      <Route path='addtodo' element={<AddTodos/>} />
      <Route path='todolist' element={<TodosList/>} />

      <Route path='about' element={<About/>} />
      <Route path='*' element={<h1>Auth page not found. 404 error</h1>} />
    </Routes>
  <Footer/>

</>
  )
}
