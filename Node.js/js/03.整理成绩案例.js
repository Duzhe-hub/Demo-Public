// 1. 导入 fs 文件系统模块
const fs = require('fs');

// 2. 获取成绩文件的内容
fs.readFile(__dirname + './../file/成绩1.txt', 'utf8', function (err, dataStr) {
    // 3. 判读获取是否成功
    if (err) {
        return console.log('文件获取失败！' + err.message);
    }
    // console.log('文件获取成功！' + dataStr);

    // 4.1 获取的成绩数据，按照空格分隔
    const arrOld = dataStr.split(' ');
    // 4.2 循环分隔后的数组，替换其中的字符
    const arrNew = [];
    arrOld.forEach(items => {
        arrNew.push(items.replace('=', '：'));
    });
    // 4.3 将数组进行合并
    const newStr = arrNew.join('\r\n');
    // console.log(newStr);

    // 5 将处理后的数据写入文件
    fs.writeFile(__dirname + './../file/成绩.txt', newStr, function (err) {
        if (err) {
            return console.log('文件写入失败！' + err.message);
        }
        console.log('文件写入成功！');
    })
});