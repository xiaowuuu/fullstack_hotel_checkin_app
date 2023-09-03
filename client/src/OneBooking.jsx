import './App.css';
import styled from 'styled-components';

const BookingCard = styled.section`
    margin: 0;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
    flex-wrap: wrap;
`
const DeleteButton = styled.button`
    border: none;
    padding: 8px;
    border-radius:5px;
    margin: 0 auto;
    display: block;
`

const OneBooking = ({ booking, deleteBooking }) => {

    return (
        <BookingCard>
            <h2>Guest Name: {booking.guest_name}</h2>
            <h3>Email: {booking.guest_email}</h3>
            {/* ternary operator */}
            <h3>Check-in Status: {booking.checkin_status == true ? "\uD83D\uDFE9" : "\uD83D\uDFE7"}</h3>
            <DeleteButton onClick={() => deleteBooking(booking._id)}>Delete</DeleteButton>
        </BookingCard>

    )
}

export default OneBooking;