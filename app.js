const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./config/passport')(passport);

const app = express();
const db = require('./config/keys').mongoURI;

app.use(passport.initialize())

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("Connected to MongoDB!"))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use('/api/users', users)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

