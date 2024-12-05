const express = require('express');
const bodyParser = require('body-parser');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use('/', appointmentRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
