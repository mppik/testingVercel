const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Endpoint untuk webhook
app.post('/imtestingthis', (req, res) => {
    const data = req.body;
    console.log('Data received:', data);
    res.status(200).send('Webhook KETERIMA GENGS! INI PRODUCTION! WADUH');
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});