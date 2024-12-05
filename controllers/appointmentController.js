const { APPOINTMENTS_FILE } = require('../constants');
const { loadFromFile, saveToFile } = require('../utils/fileUtils');
const Appointment = require('../models/AppointmentModel');

const bookOrModifyAppointment = (req, res) => {
    const { name, phone, service, date, time, notes } = req.body;
    const appointments = loadFromFile(APPOINTMENTS_FILE);

    const index = appointments.findIndex((app) => app.phone === phone);
    if (index !== -1) {
        appointments[index] = new Appointment(name, phone, service, date, time, notes);
    } else {
        appointments.push(new Appointment(name, phone, service, date, time, notes));
    }

    saveToFile(APPOINTMENTS_FILE, appointments);
    res.send('Appointment booked/modified successfully!');
};

const cancelAppointment = (req, res) => {
    const { phone } = req.body;
    const appointments = loadFromFile(APPOINTMENTS_FILE);

    const filtered = appointments.filter((app) => app.phone !== phone);
    if (appointments.length === filtered.length) {
        return res.status(404).send('Appointment not found!');
    }

    saveToFile(APPOINTMENTS_FILE, filtered);
    res.send('Appointment canceled successfully!');
};

module.exports = { bookOrModifyAppointment, cancelAppointment };
