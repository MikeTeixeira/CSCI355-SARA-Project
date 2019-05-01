const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PageSchema = new Schema({
    url: {type: String, required: true},
    locationx: {type: Number, required: true},
    locationy: {type: Number, required: true},
})

module.exports = mongoose.model('Page', PageSchema);