// 1. 导入 fs 文件系统模块
const fs = require('fs');

// 2. 调用 fs.readFile() 方法
// fs.readFile(path[, options], callback)   方法，读取指定文件中的内容
fs.readFile(__dirname + './../file/hello.txt', 'utf8', function (err, dataStr) {
    // 2.1 答应读取结果
    //  读取成功 err 的值为 null，
    //  读取失败 err 的值为 错误对象，dataStr 的值为 undefined
    console.log(err);
    console.log('---------');
    console.log(dataStr);

    if (err) {
        return console.log('文件读取失败!' + err.message);
    }
    console.log('文件读取成功!');
});