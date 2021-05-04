const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(bodyparser.json());
app.use(cors());

const dotenv = require('dotenv');
const connectDB = require('./config/db');

//load config
dotenv.config({path: './config/config.env'});

connectDB();


//Route
app.use('/', require('./routes/index'));

app.listen(process.env.PORT || 5000);