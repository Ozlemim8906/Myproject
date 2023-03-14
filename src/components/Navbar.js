import React from 'react'
import { Link } from 'react-router-dom'
import"./navbar.css";

const Navbar = () => {
  return (
    <div className='header'>
      <div> 
        <h1><span>Clarusway</span> Web Design</h1>
        </div>
      
      <div className='nav'>
      <Link to ="/">Home</Link>
      <Link to ="/about">About</Link>
      <Link to ="/services">Services</Link>
      </div>
      

    </div>
  )
}

export default Navbar
