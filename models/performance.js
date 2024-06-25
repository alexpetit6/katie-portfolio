const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const photoSchema = new Schema({
  url: String,
  order: Number
});

const performanceSchema = new Schema({
  photos: {
    type: Array,
    default: [],
  },
  gallery: [photoSchema]
});


module.exports = mongoose.model('Performance', performanceSchema);