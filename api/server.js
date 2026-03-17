const express = require('express');
const redis = require('redis');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const REDIS_URL = process.env.REDIS_URL || 'redis://cache-db:6379';

const client = redis.createClient({ url: REDIS_URL });
client.connect().catch(console.error);

app.get('/data', async (req, res) => {
    res.json({ message: "Hello from the hidden Node API!" });
});

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});