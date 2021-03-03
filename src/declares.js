export function map(arr,callback){
    //声明一个空数组
    let result = [];
    //遍历数组
    for (let i = 0; i < arr.length; i++) {
        //执行回调
        result.push(callback(arr[i],i));    
    }
    //返回结果
    return result;
}



export function reduce(arr,callback,initValue){
    //声明变量
    let result = initValue;
    for (let i = 0; i < arr.length; i++) {
        result = callback(result,arr[i])
    }
    return result;
}

/**
 * @param {Array} arr
 * @param {Function} callback
 */
export function filter(arr,callback){
    //声明空数组
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        //执行回调
        let res = callback(arr[i])
        //判断 如果结果为真是奇数
        if (res) {
            result.push(arr[i])
        }
    }
    return result;
}


/**
 * @param {Array} arr
 * @param {Function} callback
 */
export function find(arr,callback){
    //遍历数组
    for (let i = 0; i < arr.length; i++) {
        //执行回调
        let res = callback(arr[i],i);
        //判断
        if (res) {
            //返回当前正在遍历的元素
            return arr[i]
        }
    }
    return undefined;
}

/**
 * @param {Array} arr
 * @param {Function} callback
 */
export function findIndex(arr,callback){
    //遍历数组
    for (let i = 0; i < arr.length; i++) {
        //执行回调
        let res = callback(arr[i],i);
        //判断
        if (res) {
            //返回当前正在遍历元素的索引值
            return i
        }
    }
    return -1;
}


export function every(arr,callback){
    //遍历数组
    for (let i = 0; i < arr.length; i++) {
        //执行回调，如果回调执行返回结果为false
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}

export function some(arr,callback){
    //遍历数组
    for (let i = 0; i < arr.length; i++) {
        //执行回调，如果回调执行返回结果为false
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
}


export function unique1(arr){
    //声明一个空数组
    let result = [];
    arr.forEach(item => {
        //若result中没有该元素
        if (result.indexOf(item) === -1) {
            result.push(item)
        }
    });
    return result;
}

export function unique2(arr){
    //声明一个空数组
    let result = [];
    let obj = {};
    arr.forEach(item => {
        if (!obj[item]) {
            //将item作为下标存储在obj中
            obj[item] = true;
            result.push(item)
        }
    });
    return result;
}

export function concat(arr,...args){
    //声明一个空数组
    const result = [...arr];
    args.forEach(item=>{
        //判断item是否是数组
        if (Array.isArray(item)) {
            result.push(...item)
        } else {
            result.push(item)
        }
    })
    console.log('result11 :>> ', result);
    return result;
}

export function slice(arr,begin,end){
    begin = begin || 0;
    if (arr.length === 0 || begin >= arr.length) {
        return [];
    }
    end = end || arr.length;
    if (end < begin) {
        end = arr.length;
    }
    //声明一个空数组
    const result = [];
    //遍历数组
    for (let i = 0; i < arr.length; i++) {
        if (i >= begin && i < end) {
            result.push(arr[i])
        }
    }
    return result;
}


/**
 * @method: 数组扁平化
 * @param {Array} arr
 */
export function flatten1(arr){
    let result = [];
    //遍历数组
    arr.forEach(item=>{
        if (Array.isArray(item)) {
            result = result.concat(flatten1(item));
        } else {
            result = result.concat(item);
        }
    })
    return result;
}


export function flatten2(arr){
    let result = [...arr];
    //循环判断
    while(result.some(item=>Array.isArray(item))){
        //[1,2,[3,4,[5,6]],7,8];
        //[1,2,3,4,[5,6],7,8];
        //[1,2,3,4,5,6,7,8];
        result = [].concat(...result);
    }
    return result;
}

/**
 * @method 数组分组
 * @param {Array} arr 
 * @param {Number} arr 
 */
export function chunk(arr,size=1){
    //判断
    if (arr.length === 0) {
        return [];
    }
    //声明两个变量
    let result = [],tmp = [];
    arr.forEach(item=>{
        //判断tmp元素长度是否为0
        if (tmp.length === 0) {
            result.push(tmp)
        }
        tmp.push(item);
        //判断
        if (tmp.length === size) {
            tmp = [];
        }
    })
    return result;
}


export function newInstance(Fn,...args){
    //1.创建一个新对象
    const obj = {};
    //2.修改函数内部this指向新对象并执行
    const result = Fn.call(obj,...args);
    //修改新对象的原型对象
    obj.__proto__ = Fn.prototype;
    //3.返回新对象
    return obj;
}

/**
 * @method: 合并对象
 */
export function mergeObject(...args){
    //声明一个空对象
    const result = {};
    //遍历所有的参数对象
    args.forEach(arg =>{
        //获取当前对象所有的属性
        Object.keys(arg).forEach(key=>{
            //检测result中是否存在key属性
            if (result.hasOwnProperty(key)) {
                result[key] = [].concat(result[key],arg[key]);
            }else{
                //如果没有，直接写入
                result[key] = arg[key];
            }
        })
    })
    return result;
}

/**
 * @method 浅拷贝
 * @param {*} target 
 */
export function clone1(target){
    if (typeof target === 'object' && target !== null) {
        //判断数据是否是数组
        if (Array.isArray(target)) {
            return [...target];
        } else {
            return {...target};
        }
    }else{
        return target;
    }
}

export function clone2(target){
    if (typeof target === 'object' && target !== null) {
        //创建一个容器
        const result = Array.isArray(target)?[]:{};
        //遍历target数据
        for (let key in target) {
            console.log('key :>> ', key);
            if (target.hasOwnProperty(key)) {
                //将属性设置到result结果数据中
                result[key] = target[key];
            }
        }
        return result;
    }else{
        return target;
    }
}

/**
 * 
 * @param {*} target 
 */
export function deepClone1(target){
    const str = JSON.stringify(target);
    const result = JSON.parse(str);
    return result;
}

export function deepClone2(target){
    //检测数据类型
    if (typeof target === 'object' && target !== null) {
        //创建一个容器
        const result = Array.isArray(target)?[]:{};
        //遍历target数据
        for (let key in target) {
            if (target.hasOwnProperty(key)) {
                //拷贝
                result[key] = deepClone2(target[key]);
            }
        }
        return result;
    }else{
        return target;
    }
}

export function deepClone3(target,map=new Map()){
    //检测数据类型
    if (typeof target === 'object' && target !== null) {
        //克隆数据之前，进行判断，数据之前是否克隆过
        let cache = map.get(target);
        if (cache) {
            return cache;
        }
        //创建一个容器
        const result = Array.isArray(target)?[]:{};
        //将新的结果存入到容器中
        map.set(target,result);
        //遍历target数据
        for (let key in target) {
            if (target.hasOwnProperty(key)) {
                //拷贝
                result[key] = deepClone3(target[key],map);
            }
        }
        return result;
    }else{
        return target;
    }
}


export function deepClone4(target,map=new Map()){
    //检测数据类型
    if (typeof target === 'object' && target !== null) {
        //克隆数据之前，进行判断，数据之前是否克隆过
        let cache = map.get(target);
        if (cache) {
            return cache;
        }
        //创建一个容器
        let isArray = Array.isArray(target);
        const result = isArray?[]:{};
        //将新的结果存入到容器中
        map.set(target,result);
        //如果目标数据为数组
        if (isArray) {
            //forEach遍历
            target.forEach((item,index)=>{
                result[index] = deepClone4(item,map);
            })
        }else{
            //如果是对象
            Object.keys(target).forEach(key=>{
                result[key] = deepClone4(target[key],map)
            })
        }
        return result;
    }else{
        return target;
    }
}



export function addEventListener(el,type,fn,selector){
    //判断el的类型
    if (typeof el === "string") {
        el = document.querySelector(el);
    }
    //若没有传递子元素的选择器，则给el元素绑定事件
    if (!selector) {
        el.addEventListener(type,fn);
    }else{
        el.addEventListener(type,(e)=>{
            //获取点击的目标事件源
            const target = e.target;
            console.log('target :>> ', target);
            //判断选择器与目标元素是否相符合
            if (target.matches(selector)) {
                //若符合，则调用回调
                fn.call(target,e)
            }
        })
    }
}