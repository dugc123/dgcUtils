/**
 *  在示例中，我们定义了一个 curry 函数，它接受一个多参数函数 fn 作为参数。curry 函数返回一个新函数 curried，该函数可以接受任意数量的参数。
    当调用 curried 函数时，它会检查传递的参数数量是否足够执行原始函数 fn。如果参数数量足够，则直接调用 fn 并返回结果。否则，返回一个新的函数，
    该函数将之前传递的参数与新传递的参数拼接在一起，并再次调用 curried 函数。
    通过这种方式，我们可以使用柯里化函数 curriedAdd 来实现部分应用，即在不同的调用中逐步传递参数。这种灵活性可以帮助我们更好地组合和复用函数。
 */

function curry(fn) {
    return function curryied(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function (...args2) {
                return curryied.apply(this, args.concat(args2))
            }
        }
    }
}

function add(a, b, c) {
    return a + b + c;
}

// 使用柯里化函数
const curriedAdd = curry(add);
// console.log('add', curriedAdd(1)(2)(3));
console.log('add', curriedAdd(1, 2)(3));
// console.log('add', curriedAdd(1)(2, 3));
// console.log('add', curriedAdd(1, 2, 3));