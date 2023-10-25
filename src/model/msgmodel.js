const mongoose = require('mongoose')


const msgSchema = mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,

})

module.exports = mongoose.model("messages", msgSchema)
