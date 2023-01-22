const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memberSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    phone:Number,
    admission:{
        type:String,
        required:true,
        unique:true
    }
}, {timestamps:true})

const Member = mongoose.model('member', memberSchema)
module.exports = Member
