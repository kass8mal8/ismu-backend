const Member = require('../model/members')

const post_member = async(req, res) => {
    const { name, phone, admission } = req.body

    try {
        const member = await Member.create({
            name, phone, admission
        })
        res.send(member)
    } catch (error) {
        res.status(500).send(error)
    }
}


const get_member = async(req, res) => {
    try {
       const data = await Member.find()
       res.send(data)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    post_member,
    get_member
}