use booking_db;
db.dropDatabase();

db.bookings.insertMany([
    {
        guest_name: "Ying",
        guest_email:"ying123@gmail.com",
        checkin_status: false
    },
    {
        guest_name: "Patrick",
        guest_email:"patrick123@gmail.com",
        checkin_status: true
    },
    {
        guest_name: "Marc",
        guest_email:"marc123@gmail.com",
        checkin_status: true
    },
    {
        guest_name: "Tom & Jerry",
        guest_email:"tomjerry@gmail.com",
        checkin_status: false
    }
]);