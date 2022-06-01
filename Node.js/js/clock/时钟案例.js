// 1.1 导入 fs 文件系统模块
const fs = require('fs');
// 1.2 导入 path 路径处理模块
const path = require('path');

// 1.3 匹配 <style></style> 标签的正则
//      \s 表示空白字符， \S 表示非空白字符， * 表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/;
// 1.4 匹配 <script></script> 标签的正则
const regScript = /<script>[\s\S]*<\/script>/;

// 2.1 读取需要被处理的 HTML 文件
fs.readFile(path.join(__dirname, '/index1.html'), 'utf8', (err, dataStr) => {
    // 2.2 读取 HTML 文件失败时输出的内容提示
    if (err) return console.log('读取HTML文件失败! ' + err.message);

    // 2.3 读取 HTML 文件成功后，调用对应方法解析出的 js、css 和 html 文件
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
});

// 3.1 处理 CSS 样式函数
function resolveCSS(htmlStr) {
    // 3.2 使用正则提取页面中 style 标签的内容
    const r1 = regStyle.exec(htmlStr);
    // 3.3 对提取出的样式字符串进行处理，去掉标签部分
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '');
    // 3.4 将处理过后的 CSS 样式写入到 css 文件中
    fs.writeFile(path.join(__dirname, '/index.css'), newCSS, err => {
        if (err) { return console.log('写入 CSS 文件失败! ' + err.message); }
        console.log('CSS 文件写入成功!');
    });
}

// 4.1 处理 JS 脚本函数
function resolveJS(htmlStr) {
    // 4.2 使用正则提取页面中 script 标签的内容
    const r2 = regScript.exec(htmlStr);
    // 4.3 对提取出的脚本字符串进行处理，去掉标签部分
    const newJS = r2[0].replace('<script>', '').replace('</script>', '');
    // 4.4 将处理过后的 JS 脚本写入到 js 文件中
    fs.writeFile(path.join(__dirname, '/index.js'), newJS, err => {
        if (err) return console.log('JS 文件写入失败!' + err);
        console.log('JS 文件写入成功!');
    })
}

// 5.1 处理 HTML 文件函数
function resolveHTML(htmlStr) {
    // 5.2 使用字符串 replace 方法，将内嵌样式更改为外链样式
    const newHTML = htmlStr
        .replace(regStyle, '<link rel="stylesheet" href="./index.css" />')
        .replace(regScript, '<script src="./index.js"></script>');
    // 5.3 将更改后的 HTML 代码写入 html 文件中
    fs.writeFile(path.join(__dirname, '/index.html'), newHTML, err => {
        if (err) return console.log('hHTML 文件写入失败!' + err.message);
        console.log('HTML 文件写入成功!');
    })
}