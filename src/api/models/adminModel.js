const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let adminSchema = new Schema({
    pincode: {
        type: Number,
        required: true,
        unique: true
    },
    created_at: {
        type: Date,
        default: Date.now  
    },
    modified_at: {
        type: Date,
        default: Date.now  
    }
});

module.exports = mongoose.model('Admin', adminSchema);