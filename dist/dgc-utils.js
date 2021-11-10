/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dUtils"] = factory();
	else
		root["dUtils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/axios函数封装.js":
/*!**************************!*\
  !*** ./src/axios函数封装.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"axios\": () => (/* binding */ axios)\n/* harmony export */ });\nfunction axios({ method, url, params, data }) {\r\n    method = method.toUpperCase();\r\n    return new Promise((resolve, reject) => {\r\n        //1、创建对象\r\n        const xhr = new XMLHttpRequest();\r\n        console.log('xhr :>> ', xhr);\r\n        //2、初始化\r\n        //处理params对象 a=100&b=200\r\n        let str = \"\";\r\n        for (const key in params) {\r\n            str += `${key}=${params[key]}&`\r\n        }\r\n        str = str.slice(0, -1);\r\n        xhr.open(method, url + '?' + str);\r\n        //3、发送\r\n        if (method === \"POST\" || method === \"PUT\" || method === \"DELETE\") {\r\n            //Content-type mime类型设置\r\n            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8')\r\n            //设置请求体\r\n            xhr.send(JSON.stringify(data));\r\n        } else {\r\n            console.log('xhr :>> ', xhr);\r\n            xhr.send();\r\n        }\r\n        //设置响应结果的类型是 JSON\r\n        xhr.responseType = 'json';\r\n        //4、处理结果\r\n        xhr.onreadystatechange = function () {\r\n\r\n            if (xhr.readyState === 4) {\r\n                //判断响应状态码\r\n                if (xhr.status >= 200 && xhr.status < 300) {\r\n                    resolve({\r\n                        status: xhr.status,\r\n                        message: xhr.statusText,\r\n                        body: xhr.response\r\n                    })\r\n                } else {\r\n                    reject(new Error('请求失败，失败状态码为' + xhr.status))\r\n                }\r\n            }\r\n        }\r\n    })\r\n}\r\n\r\n/* 发送特定请求的静态方法 */\r\naxios.get = function (url, options) {\r\n    return axios(Object.assign(options, { url, method: 'GET' }))\r\n}\r\naxios.delete = function (url, options) {\r\n    return axios(Object.assign(options, { url, method: 'DELETE' }))\r\n}\r\naxios.post = function (url, data, options) {\r\n    return axios(Object.assign(options, { url, data, method: 'POST' }))\r\n}\r\naxios.put = function (url, data, options) {\r\n    return axios(Object.assign(options, { url, data, method: 'PUT' }))\r\n}\n\n//# sourceURL=webpack://dUtils/./src/axios%E5%87%BD%E6%95%B0%E5%B0%81%E8%A3%85.js?");

/***/ }),

/***/ "./src/declares.js":
/*!*************************!*\
  !*** ./src/declares.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map),\n/* harmony export */   \"reduce\": () => (/* binding */ reduce),\n/* harmony export */   \"filter\": () => (/* binding */ filter),\n/* harmony export */   \"find\": () => (/* binding */ find),\n/* harmony export */   \"findIndex\": () => (/* binding */ findIndex),\n/* harmony export */   \"every\": () => (/* binding */ every),\n/* harmony export */   \"some\": () => (/* binding */ some),\n/* harmony export */   \"unique1\": () => (/* binding */ unique1),\n/* harmony export */   \"unique2\": () => (/* binding */ unique2),\n/* harmony export */   \"concat\": () => (/* binding */ concat),\n/* harmony export */   \"slice\": () => (/* binding */ slice),\n/* harmony export */   \"flatten1\": () => (/* binding */ flatten1),\n/* harmony export */   \"flatten2\": () => (/* binding */ flatten2),\n/* harmony export */   \"chunk\": () => (/* binding */ chunk),\n/* harmony export */   \"newInstance\": () => (/* binding */ newInstance),\n/* harmony export */   \"mergeObject\": () => (/* binding */ mergeObject),\n/* harmony export */   \"clone1\": () => (/* binding */ clone1),\n/* harmony export */   \"clone2\": () => (/* binding */ clone2),\n/* harmony export */   \"deepClone1\": () => (/* binding */ deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* binding */ deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* binding */ deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* binding */ deepClone4),\n/* harmony export */   \"addEventListener\": () => (/* binding */ addEventListener)\n/* harmony export */ });\nfunction map(arr,callback){\r\n    //声明一个空数组\r\n    let result = [];\r\n    //遍历数组\r\n    for (let i = 0; i < arr.length; i++) {\r\n        //执行回调\r\n        result.push(callback(arr[i],i));    \r\n    }\r\n    //返回结果\r\n    return result;\r\n}\r\n\r\n\r\n\r\nfunction reduce(arr,callback,initValue){\r\n    //声明变量\r\n    let result = initValue;\r\n    for (let i = 0; i < arr.length; i++) {\r\n        result = callback(result,arr[i])\r\n    }\r\n    return result;\r\n}\r\n\r\n/**\r\n * @param {Array} arr\r\n * @param {Function} callback\r\n */\r\nfunction filter(arr,callback){\r\n    //声明空数组\r\n    let result = [];\r\n    for (let i = 0; i < arr.length; i++) {\r\n        //执行回调\r\n        let res = callback(arr[i])\r\n        //判断 如果结果为真是奇数\r\n        if (res) {\r\n            result.push(arr[i])\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\n\r\n/**\r\n * @param {Array} arr\r\n * @param {Function} callback\r\n */\r\nfunction find(arr,callback){\r\n    //遍历数组\r\n    for (let i = 0; i < arr.length; i++) {\r\n        //执行回调\r\n        let res = callback(arr[i],i);\r\n        //判断\r\n        if (res) {\r\n            //返回当前正在遍历的元素\r\n            return arr[i]\r\n        }\r\n    }\r\n    return undefined;\r\n}\r\n\r\n/**\r\n * @param {Array} arr\r\n * @param {Function} callback\r\n */\r\nfunction findIndex(arr,callback){\r\n    //遍历数组\r\n    for (let i = 0; i < arr.length; i++) {\r\n        //执行回调\r\n        let res = callback(arr[i],i);\r\n        //判断\r\n        if (res) {\r\n            //返回当前正在遍历元素的索引值\r\n            return i\r\n        }\r\n    }\r\n    return -1;\r\n}\r\n\r\n\r\nfunction every(arr,callback){\r\n    //遍历数组\r\n    for (let i = 0; i < arr.length; i++) {\r\n        //执行回调，如果回调执行返回结果为false\r\n        if (!callback(arr[i])) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\nfunction some(arr,callback){\r\n    //遍历数组\r\n    for (let i = 0; i < arr.length; i++) {\r\n        //执行回调，如果回调执行返回结果为false\r\n        if (callback(arr[i])) {\r\n            return true;\r\n        }\r\n    }\r\n    return false;\r\n}\r\n\r\n\r\nfunction unique1(arr){\r\n    //声明一个空数组\r\n    let result = [];\r\n    arr.forEach(item => {\r\n        //若result中没有该元素\r\n        if (result.indexOf(item) === -1) {\r\n            result.push(item)\r\n        }\r\n    });\r\n    return result;\r\n}\r\n\r\nfunction unique2(arr){\r\n    //声明一个空数组\r\n    let result = [];\r\n    let obj = {};\r\n    arr.forEach(item => {\r\n        if (!obj[item]) {\r\n            //将item作为下标存储在obj中\r\n            obj[item] = true;\r\n            result.push(item)\r\n        }\r\n    });\r\n    return result;\r\n}\r\n\r\nfunction concat(arr,...args){\r\n    //声明一个空数组\r\n    const result = [...arr];\r\n    args.forEach(item=>{\r\n        //判断item是否是数组\r\n        if (Array.isArray(item)) {\r\n            result.push(...item)\r\n        } else {\r\n            result.push(item)\r\n        }\r\n    })\r\n    console.log('result11 :>> ', result);\r\n    return result;\r\n}\r\n\r\nfunction slice(arr,begin,end){\r\n    begin = begin || 0;\r\n    if (arr.length === 0 || begin >= arr.length) {\r\n        return [];\r\n    }\r\n    end = end || arr.length;\r\n    if (end < begin) {\r\n        end = arr.length;\r\n    }\r\n    //声明一个空数组\r\n    const result = [];\r\n    //遍历数组\r\n    for (let i = 0; i < arr.length; i++) {\r\n        if (i >= begin && i < end) {\r\n            result.push(arr[i])\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\n\r\n/**\r\n * @method: 数组扁平化\r\n * @param {Array} arr\r\n */\r\nfunction flatten1(arr){\r\n    let result = [];\r\n    //遍历数组\r\n    arr.forEach(item=>{\r\n        if (Array.isArray(item)) {\r\n            result = result.concat(flatten1(item));\r\n        } else {\r\n            result = result.concat(item);\r\n        }\r\n    })\r\n    return result;\r\n}\r\n\r\n\r\nfunction flatten2(arr){\r\n    let result = [...arr];\r\n    //循环判断\r\n    while(result.some(item=>Array.isArray(item))){\r\n        //[1,2,[3,4,[5,6]],7,8];\r\n        //[1,2,3,4,[5,6],7,8];\r\n        //[1,2,3,4,5,6,7,8];\r\n        result = [].concat(...result);\r\n    }\r\n    return result;\r\n}\r\n\r\n/**\r\n * @method 数组分组\r\n * @param {Array} arr \r\n * @param {Number} arr \r\n */\r\nfunction chunk(arr,size=1){\r\n    //判断\r\n    if (arr.length === 0) {\r\n        return [];\r\n    }\r\n    //声明两个变量\r\n    let result = [],tmp = [];\r\n    arr.forEach(item=>{\r\n        //判断tmp元素长度是否为0\r\n        if (tmp.length === 0) {\r\n            result.push(tmp)\r\n        }\r\n        tmp.push(item);\r\n        //判断\r\n        if (tmp.length === size) {\r\n            tmp = [];\r\n        }\r\n    })\r\n    return result;\r\n}\r\n\r\n\r\nfunction newInstance(Fn,...args){\r\n    //1.创建一个新对象\r\n    const obj = {};\r\n    //2.修改函数内部this指向新对象并执行\r\n    const result = Fn.call(obj,...args);\r\n    //修改新对象的原型对象\r\n    obj.__proto__ = Fn.prototype;\r\n    //3.返回新对象\r\n    return obj;\r\n}\r\n\r\n/**\r\n * @method: 合并对象\r\n */\r\nfunction mergeObject(...args){\r\n    //声明一个空对象\r\n    const result = {};\r\n    //遍历所有的参数对象\r\n    args.forEach(arg =>{\r\n        //获取当前对象所有的属性\r\n        Object.keys(arg).forEach(key=>{\r\n            //检测result中是否存在key属性\r\n            if (result.hasOwnProperty(key)) {\r\n                result[key] = [].concat(result[key],arg[key]);\r\n            }else{\r\n                //如果没有，直接写入\r\n                result[key] = arg[key];\r\n            }\r\n        })\r\n    })\r\n    return result;\r\n}\r\n\r\n/**\r\n * @method 浅拷贝\r\n * @param {*} target \r\n */\r\nfunction clone1(target){\r\n    if (typeof target === 'object' && target !== null) {\r\n        //判断数据是否是数组\r\n        if (Array.isArray(target)) {\r\n            return [...target];\r\n        } else {\r\n            return {...target};\r\n        }\r\n    }else{\r\n        return target;\r\n    }\r\n}\r\n\r\nfunction clone2(target){\r\n    if (typeof target === 'object' && target !== null) {\r\n        //创建一个容器\r\n        const result = Array.isArray(target)?[]:{};\r\n        //遍历target数据\r\n        for (let key in target) {\r\n            console.log('key :>> ', key);\r\n            if (target.hasOwnProperty(key)) {\r\n                //将属性设置到result结果数据中\r\n                result[key] = target[key];\r\n            }\r\n        }\r\n        return result;\r\n    }else{\r\n        return target;\r\n    }\r\n}\r\n\r\n/**\r\n * \r\n * @param {*} target \r\n */\r\nfunction deepClone1(target){\r\n    const str = JSON.stringify(target);\r\n    const result = JSON.parse(str);\r\n    return result;\r\n}\r\n\r\nfunction deepClone2(target){\r\n    //检测数据类型\r\n    if (typeof target === 'object' && target !== null) {\r\n        //创建一个容器\r\n        const result = Array.isArray(target)?[]:{};\r\n        //遍历target数据\r\n        for (let key in target) {\r\n            if (target.hasOwnProperty(key)) {\r\n                //拷贝\r\n                result[key] = deepClone2(target[key]);\r\n            }\r\n        }\r\n        return result;\r\n    }else{\r\n        return target;\r\n    }\r\n}\r\n\r\nfunction deepClone3(target,map=new Map()){\r\n    //检测数据类型\r\n    if (typeof target === 'object' && target !== null) {\r\n        //克隆数据之前，进行判断，数据之前是否克隆过\r\n        let cache = map.get(target);\r\n        if (cache) {\r\n            return cache;\r\n        }\r\n        //创建一个容器\r\n        const result = Array.isArray(target)?[]:{};\r\n        //将新的结果存入到容器中\r\n        map.set(target,result);\r\n        //遍历target数据\r\n        for (let key in target) {\r\n            if (target.hasOwnProperty(key)) {\r\n                //拷贝\r\n                result[key] = deepClone3(target[key],map);\r\n            }\r\n        }\r\n        return result;\r\n    }else{\r\n        return target;\r\n    }\r\n}\r\n\r\n\r\nfunction deepClone4(target,map=new Map()){\r\n    //检测数据类型\r\n    if (typeof target === 'object' && target !== null) {\r\n        //克隆数据之前，进行判断，数据之前是否克隆过\r\n        let cache = map.get(target);\r\n        if (cache) {\r\n            return cache;\r\n        }\r\n        //创建一个容器\r\n        let isArray = Array.isArray(target);\r\n        const result = isArray?[]:{};\r\n        //将新的结果存入到容器中\r\n        map.set(target,result);\r\n        //如果目标数据为数组\r\n        if (isArray) {\r\n            //forEach遍历\r\n            target.forEach((item,index)=>{\r\n                result[index] = deepClone4(item,map);\r\n            })\r\n        }else{\r\n            //如果是对象\r\n            Object.keys(target).forEach(key=>{\r\n                result[key] = deepClone4(target[key],map)\r\n            })\r\n        }\r\n        return result;\r\n    }else{\r\n        return target;\r\n    }\r\n}\r\n\r\n\r\n\r\nfunction addEventListener(el,type,fn,selector){\r\n    //判断el的类型\r\n    if (typeof el === \"string\") {\r\n        el = document.querySelector(el);\r\n    }\r\n    //若没有传递子元素的选择器，则给el元素绑定事件\r\n    if (!selector) {\r\n        el.addEventListener(type,fn);\r\n    }else{\r\n        el.addEventListener(type,(e)=>{\r\n            //获取点击的目标事件源\r\n            const target = e.target;\r\n            console.log('target :>> ', target);\r\n            //判断选择器与目标元素是否相符合\r\n            if (target.matches(selector)) {\r\n                //若符合，则调用回调\r\n                fn.call(target,e)\r\n            }\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://dUtils/./src/declares.js?");

/***/ }),

/***/ "./src/event-bus.js":
/*!**************************!*\
  !*** ./src/event-bus.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventBus\": () => (/* binding */ eventBus)\n/* harmony export */ });\nconst eventBus = {\r\n    //保存类型与回调的容器\r\n    callbacks:{}\r\n};\r\n\r\n//绑定事件\r\neventBus.on = function(type,callback){\r\n    if (this.callbacks[type]) {\r\n        this.callbacks[type].push(callback);\r\n    }else{\r\n        this.callbacks[type] = [callback];\r\n    }\r\n}\r\n\r\n//触发事件\r\neventBus.emit = function(type,data){\r\n    if (this.callbacks[type]&&this.callbacks[type].length>0) {\r\n        //遍历数组\r\n        this.callbacks[type].forEach(callback => {\r\n            //执行回调\r\n            callback(data);\r\n        });\r\n    }\r\n}\r\n\r\n//事件的解绑\r\neventBus.off = function(eventName){\r\n    if (eventName) {\r\n        delete this.callbacks[eventName];\r\n    }else{\r\n        this.callbacks = {}\r\n    }\r\n}\n\n//# sourceURL=webpack://dUtils/./src/event-bus.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"test\": () => (/* binding */ test),\n/* harmony export */   \"map\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.map),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.reduce),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.filter),\n/* harmony export */   \"find\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.find),\n/* harmony export */   \"findIndex\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.findIndex),\n/* harmony export */   \"every\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.every),\n/* harmony export */   \"some\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.some),\n/* harmony export */   \"unique1\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.unique1),\n/* harmony export */   \"unique2\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.unique2),\n/* harmony export */   \"concat\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.concat),\n/* harmony export */   \"slice\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.slice),\n/* harmony export */   \"flatten1\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.flatten1),\n/* harmony export */   \"flatten2\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.flatten2),\n/* harmony export */   \"chunk\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.chunk),\n/* harmony export */   \"newInstance\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.newInstance),\n/* harmony export */   \"mergeObject\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.mergeObject),\n/* harmony export */   \"clone1\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.clone1),\n/* harmony export */   \"clone2\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.clone2),\n/* harmony export */   \"deepClone1\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.deepClone4),\n/* harmony export */   \"addEventListener\": () => (/* reexport safe */ _declares__WEBPACK_IMPORTED_MODULE_0__.addEventListener),\n/* harmony export */   \"axios\": () => (/* reexport safe */ _axios___WEBPACK_IMPORTED_MODULE_1__.axios),\n/* harmony export */   \"eventBus\": () => (/* reexport safe */ _event_bus__WEBPACK_IMPORTED_MODULE_2__.eventBus),\n/* harmony export */   \"PubSub\": () => (/* reexport safe */ _pub_sub__WEBPACK_IMPORTED_MODULE_3__.PubSub)\n/* harmony export */ });\n/* harmony import */ var _declares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declares */ \"./src/declares.js\");\n/* harmony import */ var _axios___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axios函数封装 */ \"./src/axios函数封装.js\");\n/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-bus */ \"./src/event-bus.js\");\n/* harmony import */ var _pub_sub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pub-sub */ \"./src/pub-sub.js\");\nfunction test(){\r\n    document.write(\"测试自定义包\")\r\n    console.log('test()');\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://dUtils/./src/index.js?");

/***/ }),

/***/ "./src/pub-sub.js":
/*!************************!*\
  !*** ./src/pub-sub.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PubSub\": () => (/* binding */ PubSub)\n/* harmony export */ });\nconst PubSub = {\r\n    //订阅唯一id\r\n    id:1,\r\n    //频道与回调保存容器\r\n    callbacks:{}\r\n};\r\n\r\n//订阅频道\r\nPubSub.subscribe = function(channel,callback){\r\n    //创建唯一编号\r\n    let token = \"token_\"+this.id++;\r\n    //判断callbacks 属性中是否存在pay\r\n    if (this.callbacks[channel]) {\r\n        this.callbacks[channel][token] = callback;\r\n    } else {\r\n        this.callbacks[channel] = {\r\n            [token]:callback\r\n        }\r\n    } \r\n    //返回频道订阅的id\r\n    return token;\r\n}\r\n\r\n//发布消息\r\nPubSub.publish = function(channel,data){\r\n    //获取当前频道中所有的回调\r\n    if(this.callbacks[channel]){\r\n        Object.values(this.callbacks[channel]).forEach(callback=>{\r\n            //执行回调\r\n            callback(data)\r\n        })\r\n    }\r\n}\r\n\r\n/**\r\n * 取消订阅\r\n *    1、没有传值，flag为undefined\r\n *    2、传入token字符串\r\n *    3、msgName字符串\r\n */\r\nPubSub.unsubscribe = function(flag){\r\n    if (flag === undefined) {\r\n        this.callbacks = {}\r\n    }else if (typeof flag === \"string\") {\r\n        //判断是否为token_开头\r\n        if (flag.indexOf('token_') === 0) {\r\n            //如果是，表名是一个订阅id\r\n            let callbackObj = Object.values(this.callbacks).find(ele=>ele.hasOwnProperty(flag))\r\n            if (callbackObj) {\r\n                delete callbackObj[flag]\r\n            }\r\n        }else{\r\n            //表名是一个频道名称\r\n            delete this.callbacks[flag]\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://dUtils/./src/pub-sub.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});