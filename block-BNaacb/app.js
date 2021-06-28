const express = require('express');
const mongoose = require('mongoose');

// Connect to Local mongodb server
mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    console.log(err ? err : 'Connected to database');
});

// Instantite Express server
const app = express();



// Listener
app.listen(4000, () => {
    console.log('Server listening on port 4k!');
});



