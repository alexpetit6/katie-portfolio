const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
  text: {
    type: String,
    maxLength: 877
  }
});

module.exports = mongoose.model('About', aboutSchema);