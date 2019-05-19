const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Page = new Schema({
    url: {type: String, required: true},
    title: {type: String, required: true}, //From HTML meta deta
    description: {type: String, required: true},
    lastModified: {type: String, required: true},
    lastIndexed: {type: String, required: true},
    timeToIndex: {type: Number}

})

module.exports = mongoose.model('Page', Page);