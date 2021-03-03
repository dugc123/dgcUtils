function call(Fn, obj, ...args){
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