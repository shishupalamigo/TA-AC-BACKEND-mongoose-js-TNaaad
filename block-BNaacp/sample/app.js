const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/sample', { useNewUrlParser: true,  useUnifiedTopology: true}, (err) => {
    console.log(err ? err : 'Connected to  Database');
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('This server is connected to MongoDb Database');
});
app.post('/users', (req, res) => {
    User.create(req.body, (err, user) => {
        console.log(err);
        res.json(user);
    });
});

app.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        console.log(err);
        res.json({users: users});
    });
});

app.get('/users/:id', (req, res) => {
    let id = req.params.id;

    // User.find({"_id": id}, 
    // (err, user) => {
    //     console.log(err);
    //     res.json({user: user});
    // });

    // User.findOne({"_id": id}, (err, user) => {
    //     console.log(err);
    //     res.json(user);
    // });
    // FindOne can take any property of the     document and search for the document that has   that specific property and returns the first  document having the property.

    User.findById(id, (err, user) => {
        console.log(err);
        res.json(user);
    });
    // FindById takes the ID as the first argument
});



app.put('/users/:id', (req, res) => {
    let id = req.params.id;
    // User.findOneAndUpdate({"_id": id}, req.body, { new: true }, (err, updatedUser) => {
    //     console.log(err);
    //     res.json({user: updatedUser});
    // });
    User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
        console.log(err);
        res.json({user: updatedUser});
    });
});

app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, deletedUser) => {
        console.log(err);
        res.send(`user ${deletedUser.name} has been deleted`);
    });
});


app.listen(3000, () => {
    console.log('Server listening on port 3K!');
});

