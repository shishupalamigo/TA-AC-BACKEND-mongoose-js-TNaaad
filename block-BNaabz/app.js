const express = require('express');
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/test',{ useNewUrlParser: true, useUnifiedTopology: true },  (err) =>  {
    console.log(err ? err: 'Connected to Database');
});
const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to MongooseJS');
});

app.listen(3000, () => {
    console.log('Server listening on port 3k!');
});