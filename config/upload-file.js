const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const {S3_REGION, S3_BUCKET, S3_BASE_URL} = process.env;

module.exports = async function(file, pdf=false) {
  const s3Client = new S3Client({ region: S3_REGION});
  const s3Params = 
  {
    Bucket: S3_BUCKET,
    Key: `${Date.now()}-${file.originalname}`,
    Body: file.buffer,
    ContentType: `application/${pdf ? 'pdf' : 'octet-stream'}`
  };
  await s3Client.send(new PutObjectCommand(s3Params));
  console.log(s3Params.Key)
  return `${S3_BASE_URL}${S3_BUCKET}/${s3Params.Key}`;
};