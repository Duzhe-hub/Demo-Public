// 1. 导入 http 模块
const http = require('http');

// 2. 创建 web 服务器实例
const server = http.createServer();

// 3. 为服务器实例绑定 request 事件，监听客户端请求
server.on('request', (req, res) => {
    console.log('Someone visit our web server.');

    // req 请求对象，包含客户端的请求属性和方法
    const url = req.url;        // 客户端的请求的 url 地址
    // const method = req.method;  // 客户端的请求类型

    // 根据访问的不同页面，显示页面内容
    let content = '<h1>404 Not found</h1>'; // 创建变量，默认显示情况
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>';
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>';
    }

    // 设置内容编码格式，中文乱码解决问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // res 响应对象，包含服务器的响应属性和方法
    // const str = `Your request url is ${req.url}, and request method is ${req.method}`;
    // console.log(str);
    res.end(content); // res.end() 方法向客户端响应指定的内容，并结束本次请求的处理过程
});

// 4. 启动服务器
server.listen(8080, () => {
    console.log('server running at http://127.0.0.1:8080');
});