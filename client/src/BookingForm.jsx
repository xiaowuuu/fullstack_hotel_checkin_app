import { useState } from "react";
import { postBooking } from "./BookingService";

const BookingForm = ({addBooking}) => {
    const [formData, setFormData] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        formData["guest_name"] = formData.name;
        formData["guest_email"] = formData.email;
        formData["checkin_status"] = formData.status;
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
        <h3>New Booking</h3>
        <form onSubmit={handleSubmit} method="post">
            <label htmlFor="name">Guest Name: </label>
            <input type="text" onChange={onChange} id="name" v-model="name" required/>
            <label htmlFor="email">Email: </label>
            <input type="email" onChange={onChange} id="email" required/>
            <label htmlFor="status">Check-in Status: </label>
            <label htmlFor="checkedin">Checked-in</label>
            <input onChange={onChange} type="radio" id="checkedin" name="status" value="checked-in"/>
            <label htmlFor="pending">Pending</label>
            <input onChange={onChange} type="radio" id="pending" name="status" value="pending"/>
            <input type="submit" value="Save" id="save"></input>
        </form>
        </>
    )
}

export default BookingForm;