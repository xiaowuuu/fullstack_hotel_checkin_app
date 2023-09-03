import './App.css';
import styled from 'styled-components';

const BookingCard = styled.section`
    margin: 2rem;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
`


const OneBooking = ({ booking, deleteBooking }) => {

    return (
        <BookingCard>
            <h2>Guest Name: {booking.guest_name}</h2>
            <h3>Email: {booking.guest_email}</h3>
            {/* ternary operator */}
            <h3>Check-in Status: {booking.checkin_status == true ? "\uD83D\uDFE9" : "\uD83D\uDFE7"}</h3>
            <button onClick={() => deleteBooking(booking._id)}>Delete</button>
        </BookingCard>

    )
}

export default OneBooking;