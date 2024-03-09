/**
 * new 操作符的执行过程：
 *  1. 在内存中自动创建一个新对象
    2. 将对象的原型指向构造函数的原型。
    3. 构造函数内部的this指向创建出来的新对象
    4. 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
 */

// 写法1：
// const _new = function (func, ...args) {
//     const obj = {};
//     obj.__proto__ = func.prototype;
//     func.apply(obj, args);
//     return typeof obj === 'object' ? obj : func;
// }

// 写法2：
const _new = function (func, ...args) {
    const obj = {};
    obj.__proto__ = func.prototype;
    let res = func.apply(obj, args);
    return res instanceof Object ? res : obj;
}
const MyClass = function (name) {
    this.name = name;
}
const myClass = _new(MyClass, 'zhangsan');
console.log('myClass',myClass);

// 写法3：
function create () {
    //创建一个空对象
    let obj = new Object();
    //获得构造函数
    let Con = [].shift.call(arguments); //取出第一个参数，即构造函数
    //链接到原型
    obj.__proto__ = Con.prototype;
    //绑定this
    let result = Con.apply(obj, arguments);
    //确保new出来的对象就是该对象
    return typeof result === 'object' ? result : obj;
}

const obj = create (MyClass, 'zhangsan');
console.log('obj',obj)