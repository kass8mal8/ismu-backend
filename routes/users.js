const { Router } = require('express')
const { post_member } = require('../controllers/userController')
const router = Router()

//router.use(express.json())

// POST a new member
router.post('/', post_member)

module.exports = router