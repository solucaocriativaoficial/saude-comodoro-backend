const mongoose = require('../database');
const Schema = mongoose.Schema
const PhoneSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    number_phone: {
        type: String,
        required: true,
    },
    _personId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Person",
        required: true,
    }
},{
    collection: "phone",
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
})

module.exports = mongoose.model('Phone', PhoneSchema)