import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import "./Navbar.css"

export default function NavBar() {


  return (
   <>
   
   <nav>
    <div className='navbar-main-container'>
        <div className="navbar-logo">
            <h1>
                <span className="navbar-logo-a">create</span>
                <span className="navbar-logo-b">Brand</span>
            </h1>
        </div>
        <ul className="navbar-items">
            <li className="navbar-item">Tool</li>
            <li className="navbar-item">Price</li>
            <li className="navbar-item">Support</li>
            <li className="navbar-item">Login</li>
        </ul>
    </div>
   </nav>
   
   </>
  )
}
