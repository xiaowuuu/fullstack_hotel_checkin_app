import { useState } from "react";
import { postBooking } from "./BookingService";
import styled from 'styled-components';
import './App.css';


const Banner = styled.h1 `
    text-align: center;
    color: #ffffff;
    padding-top: 80px;
    
`
const NewBookingForm = styled.section`
    display:inline-block;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction:row;
    margin-left:  280px;
`
const FormName = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px 0px 0px 10px;
    background: #FFF;
    width: 200px;
    height: 100px;
`
const FormEmail = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #FFF;
    width: 200px;
    height: 100px;
`
const Label = styled.h3`
    font-weight:bold;
`

const FormCheckin = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: white;
    width: 200px;
    height: 100px;
    border-radius: 0px 10px 10px 0px;
`
const RadioOptions = styled.section`
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
            <div class="bg-img">
                <NewBookingForm>
                    <Banner><h1>White Lotus Hotel Booking System</h1></Banner>
                    <form onSubmit={handleSubmit} method="post" id="new_booking_form" action="/action_page.php">
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
                                <label htmlFor="checkin">Check-in</label>
                                <input onChange={onChange} type="radio" id="checkin_status" name="status" value="true" />
                                <label htmlFor="checkin">Check-out</label>
                                <input onChange={onChange} type="radio" id="checkin_status" name="status" value="" />
                            </RadioOptions>
                        </FormCheckin>
                        <input type="submit" value="Save" id="save"></input>
                    </form>
                </NewBookingForm>
            </div>
        </>
    )
}

export default BookingForm;