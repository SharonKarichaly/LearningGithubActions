require('dotenv').config();
const path = require('path');
const express = require('express');
const OS = require('os');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const serverless = require('serverless-http');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    user: process.env.MONGO_USERNAME,
    pass: process.env.MONGO_PASSWORD
}).then(() => {
    console.log("✅ MongoDB Connection Successful");
}).catch(err => {
    console.error("❌ MongoDB Connection Error:", err.message);
});

const Schema = mongoose.Schema;

const techStackSchema = new Schema({
    name: String,
    id: Number,
    description: String,
    logo: String,
    category: String,
    yearCreated: String,
    popularity: String,
    useCase: String
});
const TechStack = mongoose.model('techstacks', techStackSchema);

// API endpoint to get tech stack by ID
app.post('/techstack', async (req, res) => {
    try {
        const techData = await TechStack.findOne({ id: req.body.id });

        if (!techData) {
            return res.status(404).json({ error: "Tech stack not found" });
        }

        res.json(techData);
    } catch (err) {
        console.error("Error fetching tech stack:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});

app.get('/os', (req, res) => {
    res.json({
        os: OS.hostname(),
        env: process.env.NODE_ENV
    });
});

app.get('/live', (req, res) => {
    res.json({ status: "live" });
});

app.get('/ready', (req, res) => {
    res.json({ status: "ready" });
});

// Start server only when running directly (not during tests)
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`🚀 Tech Stack Explorer running on http://localhost:${PORT}`);
        console.log(`📖 Open your browser and visit: http://localhost:${PORT}`);
    });
}

// Export for testing
module.exports = app;

// Export serverless handler for Lambda/serverless deployment
module.exports.handler = serverless(app);