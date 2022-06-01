// 这是包的入口

// 导入功能模块
const date = require('./src/dateFormat');
const escape = require('./src/htmlEscape');

// 共享函数
module.exports = {
    ...date,
    ...escape
}