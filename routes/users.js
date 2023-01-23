const { Router } = require('express')
const { post_member, get_member } = require('../controllers/userController')
const router = Router()

// POST a new member
router.post('/', post_member)

// Get all members
router.get('/', get_member)

module.exports = router