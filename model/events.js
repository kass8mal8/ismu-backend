const mongoose = require('mongoose')
const Schema = mongoose.Schema

const options = {collection:'event'};
const eventSchema = new Schema({ .. }, options)

const Event = mongoose.model('event', eventSchema)
module.exports = Event
