const mongoose = require('../database');
const Schema = mongoose.Schema
const DecressSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    local: {
        type: String,
        required: true,
    },
    describe: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    _personId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Person",
        required: true,
    }
},{
    collection: "decress",
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
})

module.exports = mongoose.model('Decress', DecressSchema)