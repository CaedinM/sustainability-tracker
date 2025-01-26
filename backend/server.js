
// import required modules
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

// instantiate our express app
const app = express();
// define port number
const PORT = 5001;
// define the path to our JSON file
const DATA_FILE = 'data.json';

// include CORS headers on every response to avoid errors on browser
app.use(cors());
// tell express to parse JSON body
app.use(bodyParser.json());

// Create GET Endpoint: Fetch sustainability actions
app.get('/api/actions', (req, res) => {
    fs.readFile(DATA_FILE, (err, data) => {
        if (err) return res.status(500).json({ error: "Failed to read data" });
        res.json(JSON.parse(data));
    });
});

// Create POST Endpoint: Add a new action
app.post('/api/actions', (req, res) => {

    fs.readFile(DATA_FILE, (err, data) => {
        if (err) return res.status(500).json({ error: "Failed to read data" });

        const actions = JSON.parse(data);

        // generate next ID in sequential order
        const nextId = actions.length > 0 ? Math.max(...actions.map(a => a.id)) + 1 : 1;

        const newAction = {
            id: nextId, // assign next available ID
            action: req.body.action?.trim(),
            date: req.body.date,
            points: Number(req.body.points)
        };

        // validate action
        if (!newAction.action || !newAction.date || !newAction.points) {
        return res.status(400).json({ error: "Invalid action data" });
        }

        actions.push(newAction);

        fs.writeFile(DATA_FILE, JSON.stringify(actions, null, 2), (err) => {
            if (err) return res.status(500).json({ error: "Failed to save action" });
            res.status(201).json(newAction);
        });
    });
});

// Centralized error handling for unexpected errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong on the server" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});