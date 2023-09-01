import { useState, useEffect } from 'react'
import { getBookings } from './BookingService';
import './App.css'

function App() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    getBookings()
    .then((data) => {
      console.log(data)
    })
  })
  return (
    <>
      
    </>
  )
}

export default App
