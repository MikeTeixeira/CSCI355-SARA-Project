const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WordSchema = new Schema({
    word: {type: String, required: true},
    pages: {type: Schema.Types.ObjectId, ref: 'page'},
    total: {type: Number, default: 0},
    search_count: {type: Number, default: 0},
});

module.exports = mongoose.model('Word', WordSchema);