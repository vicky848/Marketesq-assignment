import './index.css'
import React from 'react';
import './index.css';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';

const OrderComplete = () => {
  const { state } = useLocation();
  const { name, email, phone, checkIn, checkOut, rooms, totalAmount } = state;

  return (
    <>
    <Navbar/>
  
    <div className="order-complete-container">
        
      <h2 className='order-heading'>Order Complete</h2>
      <p className='thank-text'>Thank you for your booking!</p>

      <div className="order-details">
        <h3>Booking Summary</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Check-In:</strong> {checkIn}</p>
        <p><strong>Check-Out:</strong> {checkOut}</p>
        <p><strong>Rooms:</strong> {rooms}</p>
        
      </div>

      <div className='button-container'>
        <button  className='button-total-amount'>Total Amount: {totalAmount}</button>

        <button className="back-button" onClick={() => window.location.href = '/'}>
        Go to Home
      </button>

      </div>

      

       
      <div className="location-details">
          <p className='location-heading'>Brisphere</p>
          <p>Spituk, Ladakh, India, 194101</p>
          <p>Contact: +91 - 7764997033</p>
          <p>Email: amit.jha6700@gmail.com</p>
          <button className='location-button'>Location</button>
        </div>


    </div>
    </>
  );
}

export default OrderComplete;