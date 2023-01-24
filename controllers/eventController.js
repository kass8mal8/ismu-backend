const Event = require('../model/events')

// Get all activities
const get_events = async(req, res) => {

    try {
        const event = await Event.find()
        res.send(event)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    get_events
}