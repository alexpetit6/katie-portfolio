const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
  text: String
});

module.exports = mongoose.model('About', aboutSchema);