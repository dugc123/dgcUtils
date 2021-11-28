/**
 * 模拟instanceof
 * @param {*} left instanceof左侧的实例
 * @param {*} right instanceof右侧的构造函数
 * @returns left是否是right的实例
 */
function instanceOf(left, right) {
    if (typeof left !== "object" || left === null) {
        return false;
    }
    while (true) {
        if (left === null) {
            return false;
        }
        if (left.__proto__ === right.prototype) {
            return true;
        }

        left = left.__proto__;
    }
}


function Person() {

}
const person = new Person()

console.log(instanceOf(person, Person));