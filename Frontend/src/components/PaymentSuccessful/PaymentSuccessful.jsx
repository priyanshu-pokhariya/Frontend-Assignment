import React from 'react'
import "./PaymentSuccessful.css"
import {TiTick} from "react-icons/ti"
const PaymentSuccessful = () => {
  return (
    <div className='payment-successful'>
        <h1>
        <TiTick className='icon'/>
        Payment Successful
        </h1>

    </div>
  )
}

export default PaymentSuccessful