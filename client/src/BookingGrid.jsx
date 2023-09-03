import OneBooking from "./OneBooking";
import './App.css';

const BookingGrid = ({bookings, deleteBooking}) => {
    const bookingList = bookings.map((booking) => {
        return (
            <>
            <OneBooking booking={booking} key={booking._id} deleteBooking={deleteBooking} />
            </>
        )
    });
    return (
        <>
        <div className="booklingList">
        {bookingList}
        </div>
        <h5>Checked-in: &#x1F7E9;</h5>
        <h5>Pending: &#x1F7E7;</h5>
        
        </>
    )
}

export default BookingGrid;