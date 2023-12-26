import React from 'react'
import "./Card.css"

const Card = ({title,paragraph,img}) => {
  return (
    <div className='card' >
        <div className='image'>
            <img src={img} alt="Image" />
        </div>
        <div className='title'>{title}</div>
        <div className='paragraph'>
         {paragraph}
        </div>
    </div>
  )
}

export default Card