import OneBooking from "./OneBooking";

const BookingGrid = ({bookings}) => {
    const bookingList = bookings.map((booking) => {
        return (
            <>
            <OneBooking booking={booking} key={booking._id} />
            </>
        )
    });
    return (
        <>
        {bookingList}
        <h5>Checked-in: &#x1F7E9;</h5>
        <h5>Pending: &#x1F7E7;</h5>
        </>
    )
}

export default BookingGrid;