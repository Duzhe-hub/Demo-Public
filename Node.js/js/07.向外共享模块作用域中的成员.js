// 定义私有常量
const age = 20;

// 向 module.exports 上挂载 username 属性
exports.username = '张三';

// 向 module.exports 上挂载 sayHello() 方法
exports.sayHello = () => {
    console.log('hello');
}
module.exports.sayHi = () => {
    console.log('hi');
}

// 向 module.exports 上挂载 age 属性
exports.age = age;

// ! require() 导入模块时，导入的结果永远以 module.exports 指向的对象为准。
// 让 module.exports 指向一个新对象
// module.exports = {
//     name: '张三',
//     age: 18,
//     sayHi() {
//         console.log(`我叫${this.name}，今年${age}岁。`);
//     }
// }

// 打印自定义模块中的 module 对象
// console.log(module);

// module.exports 和 exports
// console.log(module.exports);
// console.log(exports);
// console.log(exports === module.exports);