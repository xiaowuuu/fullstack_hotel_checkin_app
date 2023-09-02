import { useState, useEffect } from 'react'
import { getBookings } from './BookingService';
import BookingGrid from './BookingGrid';
import './App.css'

function App() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    getBookings()
    .then((data) => {
      console.log(data)
      setBookings(data)
    })
  }, []);

  return (
    
    <div className='App'>
      <h2>Booking System</h2>
      <BookingGrid bookings={bookings}/>
    </div>
  )
}

export default App
