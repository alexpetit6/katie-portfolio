const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const performanceSchema = new Schema({
  photos: {
    type: Array,
    default: [],
  },
});


module.exports = mongoose.model('Performance', performanceSchema);