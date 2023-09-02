const OneBooking = ({booking}) => {
    return (
        <>
        <h2>Guest Name: {booking.guest_name}</h2>
        <h3>Email: {booking.guest_email}</h3>
        <h3>Check-in Status: </h3>
        </>
        
    )
}

export default OneBooking;