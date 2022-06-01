// 1. 导入 fs 文件系统模块
const fs = require('fs');

// 2. 调用 fs.writeFile() 方法
// fs.writeFile(file, data[, options], callback)   方法，向指定文件中写入内容
fs.writeFile(__dirname + './../file/hello.txt', 'hello world', function (err) {
    // 写入成功 err 值则为 null
    // 写入失败 err 值则为 错误对象
    // console.log(err);
    
    if (err) {
        return console.log('文件写入失败!' + err.message);
    }
    console.log('文件写入成功!');
});
