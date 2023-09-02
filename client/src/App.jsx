import { useState, useEffect } from 'react'
import { getBookings } from './BookingService';
import BookingGrid from './BookingGrid';
import './App.css'
import BookingForm from './BookingForm';

function App() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    getBookings()
    .then((data) => {
      console.log(data)
      setBookings(data)
    })
  }, []);
  
  const addBooking = (booking) => {
    let temp = bookings.map(g => g);
    temp.push(booking);
    setBookings(temp);
  }

  return (
    
    <div className='App'>
      <h2>Booking System</h2>
      <BookingForm addBooking={addBooking} />
      <BookingGrid bookings={bookings}/>
    </div>
  )
}

export default App
