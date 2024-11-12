import React, { Component } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

class BookingSummary extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    checkIn: '01 Feb 2022',
    checkOut: '07 Feb 2022',
    rooms: 1,
    adults: 1,
    children: 2,
    totalAmount: '₹ 12,430',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.name,
          email: data.email,
          phone: data.phone,
        });
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }

  handlePayment = () => {
    const { name, email, phone, checkIn, checkOut, rooms, totalAmount } = this.state;
    this.props.navigate('/order-complete', {
      state: { name, email, phone, checkIn, checkOut, rooms, totalAmount },
    });
  };

  render() {
    const { name, email, phone, checkIn, checkOut, rooms, adults, children, totalAmount } = this.state;

    return (
      <>
       <Navbar/>
    
      <div className="booking-summary-container">
       
        <h2 className="heading">Work From Ladakh - Booking Summary</h2>

        <div className="booking-details">
          <h3>Booking Details</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Check-In:</strong> {checkIn}</p>
          <p><strong>Check-Out:</strong> {checkOut}</p>
          <p><strong>Rooms:</strong> {rooms}</p>
          <p><strong>Adults:</strong> {adults}</p>
          <p><strong>Children:</strong> {children}</p>
        </div>

        <div className="payment-details">
          <h3>Payment Summary</h3>
          <p><strong>Total Amount:</strong> {totalAmount}</p>
          <button className="pay-button" onClick={this.handlePayment}>Click to pay amount</button>
        </div>

        <div className="location-details">
          <p className='location-heading'>Brisphere</p>
          <p>Spituk, Ladakh, India, 194101</p>
          <p>Contact: +91 - 7764997033</p>
          <p>Email: amit.jha6700@gmail.com</p>
          <button className='location-button'>Location</button>
        </div>

        <div className="footer">
          <p className="question-text">Have questions? <a href="mailto:amit.jha6700@gmail.com">Contact us</a></p>
          <p className='question-text'>Terms and Conditions | Privacy Policy | Refunds</p>
        </div>
      </div>
      </>
    );
  }
}


function BookingSummaryWithNavigate(props) {
  const navigate = useNavigate();
  return <BookingSummary {...props} navigate={navigate} />;
}

export default BookingSummaryWithNavigate;
