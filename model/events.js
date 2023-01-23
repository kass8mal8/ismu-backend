const mongoose = require('mongoose')
const Schema = mongoose.Schema

const options = {type:String, required:true}
const eventSchema = new Schema({
    title:options,
    description:options,
    date:options
})

const Event = mongoose.model('event', eventSchema)
module.exports = Event