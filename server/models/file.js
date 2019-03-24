const mongoose = require('mongoose');

// BluePrint for the model
const fileSchema = mongoose.Schema({
    name: String,
    type: String,
    url: String,
    data: Object,
});

module.exports = mongoose.model('File', fileSchema);