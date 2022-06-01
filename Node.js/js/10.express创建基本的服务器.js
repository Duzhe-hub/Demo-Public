// Express：基于 Node.js 中 html 模块封装的更加高效的框架，用来创建 Web 服务器和 API 服务器。
// 使用方法：
//  1. 安装 express         npm i express
//  2. 导入 express
const express = require('express');

//  3. 创建 Web 服务器
const app = express();

// 4. 监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
// app.get('/', (req, res) => {
//     // 调用 send() 方法 向客户端响应 JSON 对象
//     // res.send({ name: 'zs', age: 20, gender: '男' });

//     // req.query 可以访问到客户端通过查询字符串的形式，发送到服务器的参数
//     // 默认情况为空对象 {}
//     res.send(req.query);
// });
// URL 地址中，使用 :参数名 的形式，匹配动态的参数值，可匹配多个
app.get('/user/:id/:name', (req, res) => {
    // req.params 默认为空对象，存放着动态匹配到的参数值
    res.send(req.params);
});

app.post('/user', (req, res) => {
    // 调用 send() 方法 向客户端响应 JSON 对象
    res.send('请求成功');
});

// 5. 调用 app.listen(host, callback) 方法启动服务器
app.listen(8080, () => {
    console.log('express server running at http://127.0.0.1');
});