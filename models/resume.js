const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
  choreo: String,
  perf: String
});

module.exports = mongoose.model('Resume', resumeSchema);