const mongoose = require('../database');
const Schema = mongoose.Schema
const PostosSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    atendimento: {
        initial_hours: {
            type: String,
            required: true,
        },
        final_hours: {
            type: String,
            required: true,
        },
    },
    coords:{
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        },
    },
    _personId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Person",
        required: true,
    }
},{
    collection: "postos",
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
})

module.exports = mongoose.model('Postos', PostosSchema)