const mongoose = require('../database');
mongoose.set('useCreateIndex', true)
const Schema = mongoose.Schema
const PersonSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
},{
    collection: "person",
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
})

module.exports = mongoose.model('Person', PersonSchema)