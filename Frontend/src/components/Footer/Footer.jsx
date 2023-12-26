import React from 'react'
import "./Footer.css"
import {FaLinkedin,FaYoutube,FaInstagram,FaTwitter} from "react-icons/fa"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>
       <div className='about'>
        <h3>About Company</h3>
        <Link>Home</Link>
        <Link>Gallery</Link>
       </div>
       <div className='links'>
        <h3>Links</h3>
        <Link>Join Us</Link>
       </div>
        <div className='address'>
          <h3>Address</h3>
           Block,New Delhi
           Contact Us : drishtifoundation@gmail.com
           Phone No. : +91 9999999999
        </div>
        <div className='social'>
          <h3>Let's Connect</h3>
          <div className='social-links'>
          <FaLinkedin/>
           <FaYoutube/>
           <FaInstagram/>
           <FaTwitter/>
           </div>
        </div>
    </footer>
  )
}

export default Footer