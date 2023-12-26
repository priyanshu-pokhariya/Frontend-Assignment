import React, { useState } from 'react'
import "./DonationForm.css"
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import PaymentSuccessful from '../PaymentSuccessful/PaymentSuccessful';

const DonationForm = ({open,DonationHandler}) => {  
  const [amount,setAmount] = useState("");
  const [number,setNumber] = useState("");
  const [email,setEmail] = useState("");
  
  const navigate = useNavigate();

  const donate = async ()=>{
    console.log({amount,number,email});
    const res = await fetch("https://donation-backend.onrender.com/apiKey");
    const key = await res.json();


    console.log(key);
    const currency ="INR";
    const order = {
      amount:`${amount}00`,
      number,
      email,
      currency
    }

    const razorpayOrder = await fetch("https://donation-backend.onrender.com/createOrder",{
      method:"POST",
      body:JSON.stringify(order),
      headers:{
        "Content-Type":"application/json"
      }
    });

      const orderData = await razorpayOrder.json();

      const options = {
        "key": key, // Enter the Key ID generated from the Dashboard
        "amount": orderData.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Driishti Foundation",
        "description": "Donation",
        "image": "https://example.com/your_logo",
        "order_id": orderData.order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "https://ngopractice.netlify.app/",
        "prefill": {
            "name": "Gaurav Kumar",
            "email": email,
            "contact": number
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
      };

   const razor = new window.Razorpay(options);
   razor.open();
    
  } 

  return (
<>

  <div className='donation-form-container' style={{display:(open)? "flex":"none"}}>
    <div className='donation-form' >
    <h3 className='donation-title'>Donation Form</h3>
        <AiOutlineClose className="donation-close" onClick={DonationHandler} />
       <input type="text" placeholder="Amount (Required)" value={amount} onChange={(e)=>setAmount(e.target.value) }
       required />
       <input type="tel" placeholder='Phone No. (Required)' value={number} onChange={(e)=>setNumber(e.target.value) } required />
       <input type="email" placeholder='Email (Required)' value={email} onChange={(e)=>setEmail(e.target.value)} required />
       <div className='donation-button' onClick={donate}>Donate</div>
        </div>
        </div>
        </>
  )
}

export default DonationForm