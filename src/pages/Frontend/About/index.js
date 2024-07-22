import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {

const users=JSON.parse(localStorage.getItem("users")) || []

const generatetable = () =>{
  return users.map((user,i) =>
  (
    <tr key={i}>
    <th scope="row">{i + 1}</th>
    <td>{user.name}</td>
    <td>{user.email}</td>
  </tr>
  ));
}


const table =(
  <div className="table-responsive">
  <table className="table table-striped border border-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
  {generatetable()}
  </tbody>
  </table>
</div>
)



  return (
    <main className='d-flex justify-content-center align-items-center'>
      <div className="conatiner text-center">
        <div className="row">
            <div className="col">
                <h1>USERS</h1>
                {table}

                <Link to='/'  className='btn btn-primary'>Back</Link>
            </div>


        </div>
      </div>
    </main>
  )
}
