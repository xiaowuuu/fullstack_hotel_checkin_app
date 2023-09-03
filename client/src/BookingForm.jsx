import { useState } from "react";
import { postBooking } from "./BookingService";
import './App.css';

const BookingForm = ({ addBooking }) => {

    const [formData, setFormData] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset(); //reset when submit the form
        formData["bookings"] = {};
        // formData["guest_email"] = formData.email;
        // formData["checkin_status"] = formData.status;
        postBooking(formData).then((data) => {
            addBooking(data);
        });
    }
    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    return (
        <>
            <div className="newBookingForm">
                <form onSubmit={handleSubmit} method="post" id="new_booking_form">
                    <div className="form-name">
                        <label htmlFor="guest_name">Guest Name: </label>
                        <input type="text" onChange={onChange} id="guest_name" v-model="guest_name" required />
                    </div>
                    <div className="form-email">
                        <label htmlFor="guest_email">Email: </label>
                        <input type="email" onChange={onChange} id="guest_email" required />
                    </div>
                    <div className="form-checkin">
                        <label htmlFor="checkin">Check-in Status: </label>
                    </div>
                    <div className="form-checkin">
                        <label htmlFor="checkin">Checked-in</label>
                        <input onChange={onChange} type="radio" id="checkin_status" name="status" value="true" />
                        <label htmlFor="checkin">Pending</label>
                        <input onChange={onChange} type="radio" id="checkin_status" name="status" value="" />
                    </div>
                    <input type="submit" value="Save" id="save"></input>
                </form>
            </div>
        </>
    )
}

export default BookingForm;