const multer = require('multer');

const mimeToExt = {
  'image/bmp': '.bmp',
  'image/x-bmp': '.bmp',
  'image/gif': '.gif',
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/tiff': '.tiff',
  'image/vnd.wap.wbmp': '.wbmp',
};

const getFileExtension = (file) => {
  const { mimetype } = file;
  return mimeToExt[mimetype];
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + getFileExtension(file));
  },
});

const upload = multer({ storage });

module.exports = {
  upload,
};
