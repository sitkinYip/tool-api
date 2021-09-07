const path = require('path');
const multer = require('koa-multer');
const { FOOT_IMG_PATH } = require('../constants/file-path');
// 底图储存
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, FOOT_IMG_PATH);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
// 校验文件是否应该上传
let fileFilter = (req, file, cb) => {
  const { name, id } = req.body;
  if (req.url === '/upload/updatefootimage' && (!(name ? name.trim() : null) || !(id ? String(id).trim() : null))) {
    cb(null, false);
  } else if (req.url === '/upload/footcreate' && !(name ? name.trim() : null)) {
    cb(null, false);
  } else {
    cb(null, true);
  }
};
const footImageUpload = multer({
  storage,
  fileFilter,
});
// 储存文件
let footImageHandler = footImageUpload.single('pic');

module.exports = {
  footImageHandler,
};
