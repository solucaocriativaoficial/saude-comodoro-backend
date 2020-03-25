const mongoose = require('../database');
const Schema = mongoose.Schema
const PostosSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    opening_hours: {
        start: {
            type: String,
            required: true,
        },
        stop: {
            type: String,
            required: true,
        }
    },
    postos_merger: [String]
},{
    collection: "postos",
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
})

module.exports = mongoose.model('Postos', PostosSchema)