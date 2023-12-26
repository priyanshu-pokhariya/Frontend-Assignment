import React from 'react'
import "./Video.css"

const Video = () => {
  return (
    <div className='video-container'>
        <div className='video'>
        <iframe width="560" height="315" className="video-screen" src="https://www.youtube.com/embed/e5mEWJEIkXI?si=74Ov3mUx3W8LnUCD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='video-description'>
          <h3>Watch Our Journey on YouTube</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, explicabo.</p>
        </div>
        </div>
  )
}

export default Video