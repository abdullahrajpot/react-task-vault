import React from 'react'

export default function Copyright() {
    const year = new Date().getFullYear()

    
  return (
    <footer className='footer bg-primary mb-0'>
      <div className="container ">
        <div className="row">
            <div className="col text-center text-white py-2  ">
                <p>&copy; {year}. All Rights Reserved.</p>
            </div>
        </div>
      </div>

    </footer>
  )
}
