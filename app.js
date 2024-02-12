// imports
const express = require('express');
const moment = require('moment');
const cors = require('cors');

const app = express();
const port = 3000;

// implementing cors
app.use(cors());

// endpoint to call from frontend
app.get('/currentdate', (req, res) => {
    res.send(moment().format('MM/DD/YYYY HH:mm:ss'));
});

// app listen
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
