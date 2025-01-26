
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
    const newAction = req.body;
    // validate action
    if (!newAction.id || !newAction.action || !newAction.date || !newAction.points) {
        return res.status(400).json({ error: "Invalid action data" });
    }

    fs.readFile(DATA_FILE, (err, data) => {
        if (err) return res.status(500).json({ error: "Failed to read data" });

        const actions = JSON.parse(data);
        actions.push(newAction);

        fs.writeFile(DATA_FILE, JSON.stringify(actions, null, 2), (err) => {
            if (err) return res.status(500).json({ error: "Failed to save action" });
            res.status(201).json(newAction);
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});