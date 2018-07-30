// dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const bcrypt = require('bcryptjs');

// routes
const profile = require('./routes/api/profile');
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// MongoDB Config
const db = require('./config/keys').mongoURI;
// connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('connected to the mongo database!'))
    .catch(err => console.log(err));

// use routes
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running at port ${port}`));