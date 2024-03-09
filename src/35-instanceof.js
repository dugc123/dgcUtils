/**
 * instanceof 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的prototype
 */

function instance_of(left, right) {
    // 获得对象的原型
    left = left.__proto__;
    // 获得类型的原型
    let prototype = right.prototype;
    // 如果类型原型的对象不是对象的原型，则返回false
    while (true) {
        if (left === null) return false;
        if (left === prototype) return true;
        left = left.__proto__;
    }
}

let obj = {};
console.log(instance_of(obj, Object));