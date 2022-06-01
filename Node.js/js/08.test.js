// 导入自定义的格式化时间的模块
const TIME = require('./08.传统与包的时间格式化');
// 调用方法，格式化时间
const dt = new Date();
console.log(TIME.dateFormat(dt));

// 使用包进行时间格式化
// 1. 使用 npm 包管理工具在项目中安装格式化时间的包 moment     - npm i moment
// 2. 使用 require() 方法加载包
const moment = require('moment');
// 3. 参考官方 API 文档对时间进行格式化
// 3.1 使用 moment 方法获取当前时间
// 3.2 使用 format 方法对获取的时间进行格式化
const date = moment().format('YYYY-MM-DD HH:mm:ss');
// 4. 输出处理过后的时间
console.log(date);