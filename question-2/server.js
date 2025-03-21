require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 9876;
const WINDOW_SIZE = 10;
const TEST_SERVER_URL = "http://20.244.56.144/test";

// Load token from .env
const AUTH_TOKEN = `Bearer ${process.env.MY_ACCESS_TOKEN}`;

let windowStore = []; // Holds the last 10 unique numbers

// Fetch numbers from the test server
async function fetchNumbers(type) {
    try {
        const AUTH_TOKEN = `Bearer ${process.env.MY_ACCESS_TOKEN}`;
        console.log(`Fetching ${type} numbers...`);

        const res = await axios.get(`${TEST_SERVER_URL}/${type}`, {
            headers: { Authorization: AUTH_TOKEN },
            timeout: 500
        });

        return res.data.numbers || [];
    } catch (error) {
        console.log(`Failed to fetch ${type} numbers:`, error.response?.status, error.message);
        return [];
    }
}

// Keep only the latest 10 unique numbers
function updateWindow(newNumbers) {
    const uniqueNumbers = [...new Set([...windowStore, ...newNumbers])];

    if (uniqueNumbers.length > WINDOW_SIZE) {
        uniqueNumbers.splice(0, uniqueNumbers.length - WINDOW_SIZE);
    }

    windowStore = uniqueNumbers;
    return windowStore;
}

// API to fetch and store numbers
app.get('/numbers/:type', async (req, res) => {
    const validTypes = { p: "primes", f: "fibo", e: "even", r: "rand" };
    const type = validTypes[req.params.type];

    if (!type) {
        return res.status(400).json({ error: "Invalid type. Use 'p', 'f', 'e', or 'r'." });
    }

    const prevState = [...windowStore];
    const newNumbers = await fetchNumbers(type);
    const currState = updateWindow(newNumbers);
    const avg = currState.length ? (currState.reduce((a, b) => a + b, 0) / currState.length).toFixed(2) : 0;

    res.json({
        windowPrevState: prevState,
        windowCurrState: currState,
        numbers: newNumbers,
        avg: parseFloat(avg)
    });
});

// Start the server
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
