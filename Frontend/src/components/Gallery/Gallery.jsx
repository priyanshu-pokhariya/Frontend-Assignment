import React, { useState } from 'react'
import "./Gallery.css"
import Navbar from '../Navbar/Navbar'
import {AiOutlineClose} from "react-icons/ai";

const Gallery = () => {
  const [model,setModel] = useState(false);
  const [tempImgSrc,setTempImgSrc] = useState("");

  const zoom = (src) => {
  setTempImgSrc(src);
  setModel(true);
  }

  const close = () => {
    const box = document.getElementById("full-image-box");
    box.style.display = "none";
  }
  return (
    <>
      <Navbar />
      <div className='gallery' >

        <div className={model?"model open" : "model"}>
          <img src={tempImgSrc} alt="Full Image" />
           <AiOutlineClose onClick={()=>setModel(false)}/>
        </div>

        <img src="https://images.unsplash.com/photo-1692854236272-cc49076a2629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="image" className='image' onClick={(e) => zoom(e.target.src)} />
        <img src="https://images.unsplash.com/photo-1692854236272-cc49076a2629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="image" className='image' onClick={(e) => zoom(e.target.src)} />
        <img src="https://images.unsplash.com/photo-1692854236272-cc49076a2629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="image" className='image' onClick={(e) => zoom(e.target.src)} />
        <img src="https://images.unsplash.com/photo-1692854236272-cc49076a2629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="image" className='image' onClick={(e) => zoom(e.target.src)} />
        <img src="https://images.unsplash.com/photo-1692854236272-cc49076a2629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="image" className='image' onClick={(e) => zoom(e.target.src)} />
        <img src="https://images.unsplash.com/photo-1692854236272-cc49076a2629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="image" className='image' onClick={(e) => zoom(e.target.src)} />
      </div>
    </>
  )
}

export default Gallery