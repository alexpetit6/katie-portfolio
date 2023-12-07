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
  }
});


module.exports = mongoose.model('Album', albumSchema);