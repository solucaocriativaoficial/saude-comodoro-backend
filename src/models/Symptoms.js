const mongoose = require('../database');
const Schema = mongoose.Schema
const Symptoms = new Schema({
    symptoms: {
        type: String,
        required: true,
    },
    _personId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Person",
        required: true,
    }
},{
    collection: "symptoms",
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
})

module.exports = mongoose.model('Symptoms', Symptoms)