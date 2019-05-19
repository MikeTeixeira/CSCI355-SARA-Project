const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Search = new Schema({
    terms: {type: Array, required: true},
    count: {type: Number, default: 0},
    searchDate: {type: Date, required: true},
    timeToSearch: {type: Number}
})

module.exports = mongoose.model("search", Search);