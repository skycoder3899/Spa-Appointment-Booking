const express = require('express');
const { bookOrModifyAppointment, cancelAppointment } = require('../controllers/appointmentController');
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

router.post('/submit-booking', validateRequest, bookOrModifyAppointment);
router.post('/cancel-appointment', cancelAppointment);

module.exports = router;
