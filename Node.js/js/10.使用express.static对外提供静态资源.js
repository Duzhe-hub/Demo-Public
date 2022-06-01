// 使用 express.static() 方法，创建一个静态资源服务器，可以将指定的目录中的文件对外开放访问
// ! Express 在指定的静态目录中查找文件，并对外提供资源的访问路径，因此存放静态文件的目录名不会出现在 URL 中

const express = require('express');
const app = express();

// 调用 express.static() 方法，快速对外提供静态资源
// app.use(express.static('./clock'));
// 托管多个静态资源，则调用多次 express.static() 方法
app.use(express.static('./custom-tools-demo'));

// 访问时函数会根据目录的添加顺序查找所需文件，当有相同文件时，则会优先查询先托管的静态资源中的文件

// 挂载路径前缀，挂载后当访问该静态资源时，则需添加 /xxx 前缀才能正常访问
app.use('/clock', express.static('./clock'));

app.listen(8080, () => {
    console.log('express server running at http://127.0.0.1');
});