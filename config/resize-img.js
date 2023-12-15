const Jimp = require('jimp');

module.exports = async function(buffer, name) {
  try {
    const img = await Jimp.read(buffer);
    return await img.resize(1080, Jimp.AUTO).getBufferAsync(Jimp.AUTO);
  } catch (err) {
    console.error('Error resizing image:', err);
    throw err; // Re-throw the error to be caught by the calling code
  }
};