const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const Comment = require('./models/comment');
const Article = require('./models/article');


mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true,  useUnifiedTopology: true}, (err) => {
    console.log(err ? err : 'Connected to  Database');
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('This server is connected to MongoDb Database');
});



app.listen(3000, () => {
    console.log('Server listening on port 3K!');
});

