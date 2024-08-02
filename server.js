const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.length ? [alphabets.sort((a, b) => b.localeCompare(a))[0]] : [];

    res.json({
        is_success: true,
        user_id: 'your_name_ddmmyyyy',
        email: 'your_email@srmist.edu.in',
        roll_number: 'your_roll_number',
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
