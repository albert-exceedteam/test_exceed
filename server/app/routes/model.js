const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema(
    {
        text: String,
        checked: Boolean,
        color: String
    }
)

module.exports = mongoose.model('Item', ItemSchema)