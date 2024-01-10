const express = require('express');
const app = express();
const router = require('./router/router')
require('dotenv').config();
const PORT = process.env.port || 9000;
const mongoose = require('mongoose')
const db = require('./db/connection')
const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)



app.listen(PORT, () => {
    mongoose.db
    console.log(`server running at port number ${PORT}`);
})