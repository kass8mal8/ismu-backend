const { Router } = require('express')
const { get_events } = require('../controllers/eventController')
const router = Router()

router.get('/', get_events)

module.exports = router