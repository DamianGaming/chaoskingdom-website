const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcrypt');
const app = express();

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/chaoskingdomDB', {useNewUrlParser: true, useUnifiedTopology: true});

// User Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    isAdmin: Boolean
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'mySecret', resave: false, saveUninitialized: false }));
app.use(express.static("public"));

// Register route
app.post('/signup', (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        isAdmin: false
    });
    newUser.save(err => {
        if (!err) {
            res.redirect('/login');
        } else {
            res.send('Error signing up.');
        }
    });
});

// Login route
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email }, (err, foundUser) => {
        if (foundUser) {
            if (bcrypt.compareSync(password, foundUser.password)) {
                req.session.user = foundUser;
                res.redirect('/dashboard');
            } else {
                res.send('Incorrect password.');
            }
        } else {
            res.send('No user found.');
        }
    });
});

// Admin Dashboard
app.get('/dashboard', (req, res) => {
    if (req.session.user && req.session.user.isAdmin) {
        res.send('Welcome to Admin Dashboard');
    } else {
        res.send('Unauthorized');
    }
});

// Start server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
