const sharp = require('sharp');

module.exports = async function(buffer) {
  try {
    return sharp(buffer).resize( { width: 1080 }).toBuffer();
  } catch (err) {
    console.log(err);
  };
};