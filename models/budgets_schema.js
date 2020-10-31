const mongoose = require('mongoose');

const budgetsSchema = new mongoose.Schema({
    "title": {
        type: String,
        required: true,
        unique: true
    }, 
    "budget": {
        type: Number,
        required: true
    }, 
    "color":{
        type: String,
        required: true,
        minlength: 7
    }
}, {collection: 'budgets'})

module.exports = mongoose.model('budgets', budgetsSchema)