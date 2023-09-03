import { useState, useEffect } from 'react'
import { getBookings, deleteBooking as apiDeleteBooking } from './BookingService';
import BookingGrid from './BookingGrid';
import './App.css'
import BookingForm from './BookingForm';

function App() {
  const [bookings, setBookings] = useState([]);
  const image= {url: 'https://i.travelapi.com/lodging/1000000/60000/54200/54173/b04783ff_z.jpg'}
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
  const deleteBooking = (id) => {
    apiDeleteBooking(id).then(()=> {
      let temp = bookings.map(g=>g);
      const toDel = bookings.map(g=>g._id).indexOf(id);
      temp.splice(toDel, 1);
      setBookings(temp);
    })
  }

  return (
    
    <div className='App'>
      <img src="https://i.travelapi.com/lodging/1000000/60000/54200/54173/f7e5ef90_z.jpg" />
      <h1 className='banner'>White Lotus Hotel Booking System</h1>
      <BookingForm addBooking={addBooking} />
      <BookingGrid bookings={bookings} deleteBooking={deleteBooking}/>
    </div>
  )
}

export default App
