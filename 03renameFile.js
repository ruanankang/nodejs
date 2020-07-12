const fs = require('fs');
// const path = require('path');
// const url = path.join(__dirname, '/web/');
const url = 'E:/download/新建文件夹';
fs.readdir(url, 'utf8', (err, fileList) => {
  if (err) throw err;
  fileList.forEach((item, index) => {
    //新名称,根据需求修改名称，可以使用正则等等
    const newName = item.substr(item.indexOf('_') + 2).replace(/\.hd_x264|_.{2}/g, '');
    fs.rename(`${url}/${item}`, `${url}/${newName}`, err => {
      if (err) throw err;
    });

    // let length = item.split('.').length;
    // //获取文件后缀名
    // let type = '.' + item.split('.')[length - 1];
    // let oldName = item;

  })
})