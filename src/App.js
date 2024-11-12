import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingForm from './Components/BookingForm';
import BookingSummary from './Components/BookingSummary';
import OrderComplete from './Components/OrderComplete';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingForm />} />
        <Route path="/summary" element={<BookingSummary />} />
        <Route path="/order-complete" element={<OrderComplete />} />
      </Routes>
    </Router>
  );
}

export default App;

