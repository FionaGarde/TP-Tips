const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let tableTipSchema = new Schema({
    tips: {
        type: Number,
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
module.exports = mongoose.model('TableTip', tableTipSchema);