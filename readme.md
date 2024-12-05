# Spa Appointment Booking System

## Overview
This Spa Appointment Booking System is built using Node.js and Express.js. The system allows users to book, modify, and cancel appointments. All appointment data is temporarily stored in a text file (`appointments.txt`), which is loaded and saved in JSON format. Users can input appointment details such as name, phone number, service, time, date, and notes.

## Features
- **Booking Appointments**: Users can book new appointments or modify existing ones based on their phone number.
- **Appointment Modification**: Modify details of an existing appointment.
- **Appointment Cancellation**: Cancel appointments based on the phone number.
- **Data Storage**: All appointment data is stored in a text file (`appointments.txt`) in JSON format.
- **Error Handling**: Appropriately handle errors (e.g., appointment not found) and provide success/error messages.
- **HTML Form**: Users interact with the booking system through a simple HTML page.

## Requirements
- Node.js (v14 or higher)
- Express.js

## Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/skycoder3899/spa-appointment-booking.git
   cd spa-appointment-booking
   npm install
   node app.js
