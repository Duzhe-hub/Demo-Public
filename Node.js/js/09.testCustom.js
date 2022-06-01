// 导入自定义包
const custom = require('./custom-tools-demo');

// 使用包函数
const dtStr = custom.dateFormat(new Date());    // 时间格式化
console.log(dtStr);
console.log('---------------------------');

const htmlStr = '<h1 style="color=red">this is a h1 tag</h1>';  // HTML 转换为 转义字符
const str = custom.htmlEscape(htmlStr);
console.log(str);
console.log('---------------------------');

const newStr = custom.htmlUnEscape(str);    // 还原 HTML
console.log(newStr);