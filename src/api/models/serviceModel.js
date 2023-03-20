const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let serviceSchema = new Schema({
    shiftType: {
        type: Number,
        required: true
    },
    shiftClosed: {
        type: Boolean,
        required: true
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
module.exports = mongoose.model('Service', serviceSchema);