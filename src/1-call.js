function call(Fn, obj, ...args) {
    console.log('args :>> ', args);
    //判断
    if (obj === undefined || obj === null) {
        obj = globalThis;//全局对象
    }
    //为obj 添加临时的方法
    //此时temp内部方法的this指向obj
    obj.temp = Fn;
    //调用temp方法
    let result = obj.temp(...args);
    //删除temp方法
    delete obj.temp;
    //返回执行结果
    return result;
}


/**
 * 添加在原型上的call方法
 */
Function.prototype.my_call = function (context, ...args) {
    if (!context || context === null) {
        context = window;
    }
    // 创造唯一的key值  作为我们构造的context内部方法名
    let fn = Symbol();
    //this指向调用call的函数(bar)
    context[fn] = this;

    // 执行函数并返回结果 相当于把自身作为传入的context的方法进行调用了
    return context[fn](...args);
};


Function.prototype.my_call2 = function (context) {
    if (!context || context === null) {
        context = window;
    }
    
    //临时挂载
    context.fn = this;
    // let args = [...arguments];
    // args.shift();
    let result = arguments[1]
                    ? context.fn(...arguments[1])
                    : context.fn();
    return result;
};