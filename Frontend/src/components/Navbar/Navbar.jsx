import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <img src="https://images.unsplash.com/photo-1692854236272-cc49076a2629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Logo" />
                
            </div>
            <span className='heading'> Foundation</span>
            <div className='nav-menu'>
                <div className='nav-item'><Link to="/">Home
                </Link></div>
                <div className='nav-item'><Link to="gallery">Gallery</Link></div>
            </div>
        </nav>
    )
}

export default Navbar