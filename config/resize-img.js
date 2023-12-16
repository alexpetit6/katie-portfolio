// const Jimp = require('jimp');

// module.exports = async function(buffer, name) {
//   try {
//     const img = await Jimp.read(buffer);
//     return await img.resize(1080, Jimp.AUTO).getBufferAsync(Jimp.AUTO);
//   } catch (err) {
//     console.error('Error resizing image:', err);
//     throw err; // Re-throw the error to be caught by the calling code
//   }
// };

// const gm = require('gm').subClass({ imageMagick: '7+' });
// const util = require('util')

// module.exports = function(buffer) {
//   return gm(buffer).resize(1080).toBuffer(function (err, buffer) {
//     if (err) console.log(err);
//     console.log('resize success!')
//   });
// };

const sharp = require('sharp');

module.exports = async function(buffer) {
  try {
    return sharp(buffer).resize( { width: 1080 }).toBuffer();
  } catch (err) {
    console.log(err);
  }
}
