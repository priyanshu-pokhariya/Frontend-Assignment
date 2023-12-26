import React, { useState } from 'react'
import "./Button.css"
import DonationForm from '../DonationForm/DonationForm'

const Button = () => {
  const [open,setOpen] = useState(false);
  const DonationHandler = () => {
  //  console.log(`open:${open}`);
   setOpen(!open);
  //  console.log(`open:${open}`);
  }
  return (
    <>
      <DonationForm open={open} DonationHandler={DonationHandler} />
      <div className='button' onClick={DonationHandler}>
        Donate Now
      </div>
    </>
  )
}

export default Button