const OneBooking = ({booking}) => {
    
    return (
        <div>
        <h2>Guest Name: {booking.guest_name}</h2>
        <h3>Email: {booking.guest_email}</h3>
        {/* ternary operator */}
        <h3>Check-in Status: {booking.checkin_status == true ? "\uD83D\uDFE9" : "\uD83D\uDFE7"}</h3>
        </div>
        
    )
}

export default OneBooking;