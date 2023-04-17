require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8050
app.use(cors());
app.use(express.json());
app.use('/api', require('./routes'))
app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT: ${port}`);
});