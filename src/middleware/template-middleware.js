const path = require('path');
const multer = require('koa-multer');
const { TEMPLATE_PATH } = require('../constants/file-path');
// 参数校验
function isQuery(query) {
  return !(query ? String(query).trim() : null);
}
// ejs文件储存
const storage = multer.diskStorage({
  destination: TEMPLATE_PATH,
  filename: (req, file, cb) => {
    cb(null, path.parse(file.originalname).name + '_' + Date.now() + path.extname(file.originalname));
  },
});
// 校验文件是否应该上传
let fileFilter = (req, file, cb) => {
  const { name, id, template_url, platform_id } = req.body;
  if (req.url === '/template/update' && (isQuery(name) || isQuery(id) || isQuery(template_url) || isQuery(platform_id))) {
    cb(null, false);
  } else if (req.url === '/template/create' && (isQuery(name) || isQuery(template_url) || isQuery(platform_id))) {
    cb(null, false);
  } else if (path.extname(file.originalname) !== '.ejs') {
    cb(null, false);
  } else {
    cb(null, true);
  }
};
const templateUpload = multer({
  storage,
  fileFilter,
});
// 储存文件
let templateHandler = templateUpload.single('template');

module.exports = {
  templateHandler,
};
