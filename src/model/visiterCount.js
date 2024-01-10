const mongoose = require('mongoose')


const visiterSchema = mongoose.Schema({
    count: Number
})
module.exports = mongoose.model("visiterCount", visiterSchema)
