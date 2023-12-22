require('dotenv').config();

const express    = require('express');
const cors       = require('cors');
const UserRouter = require('./Routes/UserRouteer');
const APP        = express();
const process    = require('process');

APP.use(express.json());
APP.use(cors());

APP.use('/user', UserRouter);

APP.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`);
});