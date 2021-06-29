const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true,  useUnifiedTopology: true}, (err) => {
    console.log(err ? err : 'Connected to  Database');
});

const app = express();

app.get('/', (req, res) => {
    res.send('This server is connected to MongoDb Database');
});

app.listen(3000, () => {
    console.log('Server listening on port 3K!');
});