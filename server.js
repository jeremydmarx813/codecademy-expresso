const bodyParser = require('body-parser');
const cors = require('cors');
// const errorhandler = require('errorhandler');
const morgan = require('morgan');
const express = require('express');
const path = require('path');
const apiRouter = require('./api/api');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use('/api', apiRouter);

// app.use(errorhandler());
app.use('/public', express.static('public'))
app.get('*', (req, res) => {
    res.sendFile(path.resolve('index.html'));
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

module.exports = app;