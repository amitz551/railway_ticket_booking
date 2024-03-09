// 'use strict'
const express = require('express')
const cors = require('cors');
const app = express()
const config = require('./config.json')
const login = require('./routers/login')
const register = require('./routers/register')
const cookieParser = require("cookie-parser");
const railway = require('./routers/railway')
const payment = require('./routers/payment')
const gov = require('./routers/gov')
const user = require('./routers/user')
const contact = require('./routers/contact')
const connectDB = require('./connectdb.js');

connectDB();
const allowedOrigins = ["http://localhost:3000"];

app.use(express.json());
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));
app.use(cookieParser());

app.use(login)
app.use(register)
app.use(railway)
app.use(payment)
app.use(gov)
app.use(user)
app.use(contact)

app.listen(3001, err => {
    if (err) {
        console.error(err)
        return
    }
    console.log('app listening on port 3001')
});