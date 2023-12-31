import OneBooking from "./OneBooking";
import './App.css';
import styled from 'styled-components';

const BookingList = styled.section`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    margin: 25px 25px 25px 40px;
    gap: 30px;
`

const BookingGrid = ({ bookings, deleteBooking }) => {
    const bookingList = bookings.map((booking) => {
        return (
            <>
                <OneBooking booking={booking} key={booking._id} deleteBooking={deleteBooking} />
            </>
        )
    });
    return (
        <>
            <BookingList>
                {bookingList}
            </BookingList>
            <h5>Check-in: &#x1F7E9;</h5>
            <h5>Check-out: &#x1F7E7;</h5>
        </>

    )
}

export default BookingGrid;