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
        </>
    )
}

export default BookingGrid;