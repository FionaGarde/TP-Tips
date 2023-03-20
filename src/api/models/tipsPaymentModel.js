const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let tipsPaymentSchema = new Schema({
    amount: {
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
module.exports = mongoose.model('TipsPayment', tipsPaymentSchema);