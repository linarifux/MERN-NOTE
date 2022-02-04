const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true
    },
    creator: {
        type: String
    }
})

const note = new mongoose.model('note', noteSchema)

module.exports = note