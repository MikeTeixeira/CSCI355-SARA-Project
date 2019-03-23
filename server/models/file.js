const mongoose = require('mongoose');

// BluePrint for the model
const fileSchema = mongoose.Schema({
    name: String,
    size: Number,
    type: String,
    data: [],
});

module.exports = mongoose.model('File', fileSchema);