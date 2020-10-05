const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

let latest;

fs.readFile(path.join(__dirname, 'latest.json'), 'utf8', (err, data) => {
    if (err) throw err;
    latest = JSON.parse(data);
});

app.get('/api/meals', (req, res) => {
    res.json(latest);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);