const mongoose = require('../database');
const Schema = mongoose.Schema
const DicasSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    article: {
        type: String,
        required: true,
    },
    _personId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Person",
        required: true,
    }
},{
    collection: "dicas",
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
})

module.exports = mongoose.model('Dicas', DicasSchema)