module.exports = (req, res, next) => {
    const { name, phone, service, date, time } = req.body;
    console.log(req.body)
    if (!name || !phone || !service || !date || !time) {
        console.log(req.body)
        return res.status(400).send('Invalid request! Missing required fields.');
    }
    next();
};
