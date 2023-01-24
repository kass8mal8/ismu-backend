const express = require('express')
const app = express()
const mongoose = require('mongoose')
const MONGO_URI = 'mongodb+srv://islamic-society:ismu001@cluster0.pzrnj1b.mongodb.net/ISMU?retryWrites=true&w=majority'

// Routes
const usersRoute = require('./routes/users')
const eventsRoute = require('./routes/events')
app.use(express.json())

const connect = () => {
    try {
        mongoose.connect(MONGO_URI, {
            useNewUrlParser: 'true',
            useUnifiedTopology: 'true'
        })
        console.log('Database Connection successful');
    } catch (error) {
        console.log(error.message);
    }
}

connect()

app.use('/users', usersRoute)
app.use('/events', eventsRoute)

module.exports = app