const express = require('express');
const mongoose =  require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    console.log(err ? err : 'Connected to database');
});

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.listen(5000, () => {
    console.log('Server running on port 5k!');
});
