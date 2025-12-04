const { v2: cloudinary } = require('cloudinary');
const fs = require('fs');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryUploader = {
  upload: async (file) => {
    try {
      console.log('📤 Uploading file:', file?.path, file?.mimetype);
      if (!file?.path) throw new Error('Missing file path');

      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'gighive_reels',
        resource_type: 'auto',
      });

      fs.unlink(file.path, (err) => {
        if (err) console.warn('⚠️ Temp file not deleted:', err);
        else console.log('🧹 Temp file deleted:', file.path);
      });

      console.log('✅ Cloudinary upload successful:', result.secure_url);
      return result.secure_url;
    } catch (err) {
      console.error('❌ Cloudinary upload failed:', err.message);
      throw new Error('Cloudinary upload failed');
    }
  },
};

module.exports = cloudinaryUploader;
