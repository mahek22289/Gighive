//services/mediaUploader.js
let uploader;

function setUploader(service) {
  uploader = service;
}

async function uploadMedia(file) {
  if (!uploader) throw new Error('No media uploader configured');
  return await uploader.upload(file);
}

module.exports = { setUploader, uploadMedia };
