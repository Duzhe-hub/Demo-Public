// 1. 导入模块
const http = require('http');
const fs = require('fs');
const path = require('path');

// 2.1 创建 web 服务器
const server = http.createServer();

// 2.2 监听 web 服务器的 request 事件
server.on('request', (req, res) => {
    // 3.1 获取客户端请求的 URL 地址
    const url = req.url;
    // 3.2 将请求的 URL 地址，映射为本地文件的存放路径
    // const fpath = path.join(__dirname, url);
    let fpath = '';         // 预定义空白的存放路径
    if (url === '/') {      // 判断用户请求，优化路径
        fpath = path.join(__dirname, './clock/index.html');
    } else {
        fpath = path.join(__dirname, './clock' + url);
    }

    // 4.1 根据映射的文件路径读取文件
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        // 4.2 读取文件失败后，向客户端响应固定的“错误消息”
        if (err) return res.end('<h1>404 Not found</h1>');
        // 4.3 读取文件成功后，将“读取成功的内容”响应给客户端
        res.end(dataStr);
    });
});

// 2.3 启动服务器
server.listen(8080, () => {
    console.log('server running at http://127.0.0.1:8080');
})