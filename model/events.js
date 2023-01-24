const mongoose = require('mongoose')
const Schema = mongoose.Schema

const options = {collection:'events'};
const eventObject = {
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
}

const eventSchema = new Schema({ ...eventObject }, options)

const Event = mongoose.model('events', eventSchema)
module.exports = Event
