import React from 'react'
import "./LeftBanner.css"
import Button from '../Button/Button'


const Heading = () => {
  return (
    <>
      <div className='left-banner'>
        <div className='title'>
          A world where no child's life is torn apart by war.
        </div>
        <div className='paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, deleniti!
        </div>
        <Button />
      </div>

    </>

  )
}

export default Heading