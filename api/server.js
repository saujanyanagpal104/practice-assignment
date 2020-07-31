const express = require('express');
const cors = require('cors');
const data = require('./data.json')

const app = express();
const port = 4000 || process.env.PORT;

app.use(cors());

app.get('/', (req, res) => (
    res.json(data)
));

app.listen(port, () => console.log(`Server is running on port ${port}`))