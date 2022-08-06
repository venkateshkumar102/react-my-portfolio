import React, { useState } from 'react'
import '../css/nav.css'

const Nav = () => {
  const[isMobile, setIsMobile] = useState(true);
  return (
    <div>
      <header className="header">
        <nav className="navbar">
            
            <ul className={isMobile? "nav-menu": "nav-m" }
            onClick ={()=> setIsMobile(true)}
            >
                <li className="nav-item">
                    <a href="#home" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="#skill" className="nav-link">Skills</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">Contact</a>
                </li>
            </ul>
           <button className='btn' onClick={()=>setIsMobile(!isMobile)}>
            {isMobile ? 
            <i className='fas fa-bars'></i> 
            : <i className='fas fa-times'></i>
             }</button>
        </nav>
   
</header>
    </div>
  )
}

export default Nav