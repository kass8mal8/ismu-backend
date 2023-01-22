const User = require('../model/members')

const post_member = async(req, res) => {
    const { name, phone, admission } = req.body

    try {
        const member = await User.create({
            name, phone, admission
        })
        res.send(member)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    post_member
}