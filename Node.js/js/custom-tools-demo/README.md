## 说明文档

## 安装
```
npm install custom-tools-demo
```

## 导入
```js
const custom = require('custom-tools-demo');
```

## 格式化时间
```js
// 调用 dateFormat 方法对时间进行格式化
const dtStr = custom.dateFormat(new Date());
// 结果 2022-05-31 21:30:49
console.log(dtStr); 
```

## 转义 HTML 中的特殊字符
```js
// 待转换的 HTML 字符
const htmlStr = '<h1 style="color=red">this is a h1 tag</h1>';
// 调用 htmlEscape 方法进行转换
const str = custom.htmlEscape(htmlStr);
// 结果 &lt;h1 style=&quot;color=red&quot;&gt;this is a h1 tag&lt;/h1&gt;
console.log(str);
```

## 还原 HTML 中的特殊字符
```js
// 待还原的 HTML 字符
const str2 = custom.htmlUnEscape(str);
// 结果 <h1 style="color=red">this is a h1 tag</h1>
console.log(str2);
```

## 开源协议
ISC