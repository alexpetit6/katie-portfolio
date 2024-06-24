const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  url: String,
  order: Number
})

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
    default: []
  },
  gallery: [photoSchema],
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