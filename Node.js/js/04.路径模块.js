// 导入 path 路径模块
const path = require('path');

// path.join() 拼接输入的路径 
const pathStr = path.join('/a', '/b/c', '../d', './e');
console.log(pathStr);
const pathStr2 = path.join(__dirname, './file/hello.txt');
console.log(pathStr2);

// path.basename() 获取路径中最后一部分
const fullname = path.basename(pathStr2);   // 获取文件名
console.log(fullname);
const nameWithoutExt = path.basename(pathStr2, '.txt');   // 获取文件名，不带后缀名
console.log(nameWithoutExt);

// path.extname() 获取路径中的文件扩展名
const fext = path.extname(pathStr2);
console.log(fext);