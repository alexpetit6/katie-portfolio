const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  photos: {
    type: Array,
    default: [],
  },
  category: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'Choreographer'
  },
  theater: {
    type: String,
    required: true
  },
  order: {
    type: Number
  }
});


module.exports = mongoose.model('Album', albumSchema);