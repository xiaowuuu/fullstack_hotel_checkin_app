const baseURL = "http://localhost:9000/api/bookings"

export const getBookings = () => {
    return fetch(baseURL)
    .then(res => res.json())
}