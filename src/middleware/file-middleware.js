const path = require('path')
const multer = require('koa-multer');
const { FOOT_IMG_PATH } = require('../constants/file-path')
// 底图储存
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, FOOT_IMG_PATH)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
const footImageUpload = multer({
  storage
});
const footImageHandler = footImageUpload.single('pic');

module.exports = {
  footImageHandler
}