const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WordSchema = new Schema({
    wordName: {type: String, required: true},
});

module.exports = mongoose.model('Word', WordSchema);