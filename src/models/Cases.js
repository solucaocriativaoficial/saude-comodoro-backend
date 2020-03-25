const mongoose = require('../database');
const Schema = mongoose.Schema
const CasesSchema = new Schema({
    local: {
        type: String,
        required: true,
    },
    confirmeds: {
        type: String,
        required: true,
    },
    suspects: {
        type: Number,
    },
    deads: {
        type: Number,
        required: true,
    },
},{
    collection: "cases",
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
})

module.exports = mongoose.model('Cases', CasesSchema)