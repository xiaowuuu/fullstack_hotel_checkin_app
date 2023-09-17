# Hotel Booking Web App

## Learning Objectives

- Be able to create a full-stack app
- Practice building a server with MongoDB for persistence
- Understand the relationship between a client, server, and database

## Overview

This project is a full-stack web application that allows a hotel to manage bookings. It includes a user-friendly interface for hotel managers to add, view, and delete bookings. The application is built using JavaScript, React for the front-end, Express for the back-end, and MongoDB for data persistence.

## Features

- **View Bookings**: Hotel managers can view a list of all bookings made at the hotel.

- **Add New Booking**: Hotel managers can add new bookings by providing the following information:
  - Guest Name
  - Guest Email Address
  - Check-in Status

- **Real-time Updates**: When a new booking is added, the page updates instantly without requiring a page refresh, providing a seamless user experience.

- **Delete Bookings**: Hotel managers have the option to delete bookings if needed.

## Technology Stack

**Front-end:**

- React: Used for building the user interface and providing an interactive experience.
- JavaScript: The primary programming language for the front-end logic.

**Back-end:**

- Express.js: Used to create a robust server to handle API requests and interactions with the database.
- MongoDB: A NoSQL database for storing booking data.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**
   


2. **Navigate to the project directory:**

cd hotel-booking-app

3. **Install dependencies for both the front-end and back-end:**

cd client
npm install
cd server
npm install

4. **Set up the MongoDB database:**

- Create a MongoDB Atlas account or set up a local MongoDB instance.
- Configure your database connection in the server configuration.

5. **Start the development server for both the front-end and back-end:**

cd client
npm run dev

cd server
npm run server:dev

Open your web browser and navigate to `http://localhost:3000` to access the application.
