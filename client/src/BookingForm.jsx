import { useState } from "react";
import { postBooking } from "./BookingService";
import styled from 'styled-components';
import './App.css';

const NewBookingForm = styled.section`
    display:inline-block;
    align-items: center;
    align-content: center;
    gap: 12px;
    flex-wrap: wrap;
    flex-direction:row;
`
const FormName = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const FormEmail = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Label = styled.h3 `
    font-weight:bold;
`


const FormCheckin = styled.section `
    display: flex;
align-items: center;
flex-direction: column;
`
const RadioOptions = styled.section `
flex-direction: row;
`

const BookingForm = ({ addBooking }) => {

    const [formData, setFormData] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset(); //reset when submit the form
        formData["bookings"] = {};
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
            <NewBookingForm>
                <form onSubmit={handleSubmit} method="post" id="new_booking_form">
                    <FormName>
                        <Label htmlFor="guest_name">Guest Name: </Label>
                        <input type="text" onChange={onChange} id="guest_name" v-model="guest_name" required />
                    </FormName>
                    <FormEmail>
                        <Label htmlFor="guest_email">Email: </Label>
                        <input type="email" onChange={onChange} id="guest_email" required />
                    </FormEmail>
                    <FormCheckin>
                        <Label htmlFor="checkin">Check-in Status: </Label>
                        <RadioOptions>
                        <label htmlFor="checkin">Checked-in</label>
                        <input onChange={onChange} type="radio" id="checkin_status" name="status" value="true" />
                        <label htmlFor="checkin">Pending</label>
                        <input onChange={onChange} type="radio" id="checkin_status" name="status" value="" />
                        </RadioOptions>
                    </FormCheckin>
                    <input type="submit" value="Save" id="save"></input>
                </form>
            </NewBookingForm>
        </>
    )
}

export default BookingForm;