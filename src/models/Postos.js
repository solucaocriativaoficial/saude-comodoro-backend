const mongoose = require('../database');
const Schema = mongoose.Schema
const PostosSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    open: {
        type: String,
        required: true,
    },
    close: {
        type: String,
        required: true,
    },
    postos_merger: [String]
},{
    collection: "postos",
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
})

module.exports = mongoose.model('Postos', PostosSchema)