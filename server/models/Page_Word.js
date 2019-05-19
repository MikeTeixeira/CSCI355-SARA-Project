const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PageWord = new Schema({
    pageId: {type: Schema.Types.ObjectId, ref: 'page', required: true},
    wordId: {type: Schema.Types.ObjectId, ref: 'word', required: true},
    frequency: {type: Number, default: 0},
})

module.exports = mongoose.model('page_word', PageWord);