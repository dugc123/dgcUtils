export function test(){
    document.write("测试自定义包")
    console.log('test()');
}

export {map,reduce,filter,find,findIndex,
    every,some,unique1,unique2,concat,slice,
    flatten1,flatten2,chunk,newInstance,
    mergeObject,clone1,clone2,deepClone1,
    deepClone2,deepClone3,deepClone4,addEventListener} from "./declares";

export {axios} from "./axios函数封装";
export {PubSub} from "./event-bus";