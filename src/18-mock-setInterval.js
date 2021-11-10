/**
 * @method: 使用setTimeout模拟setInterval
 */
let timeId = null;

function mockSetInterval(fn,delay,...args){
    function recur(){
        timeId = setTimeout(() => {
            fn.apply(this,args);            
            recur();
        }, delay);
    }
    recur();
}

function mockClearInterval(id){
    clearTimeout(id)
}

mockSetInterval((name)=>{
    console.log(name);
},1000,'wangcai')

setTimeout(() => {
    mockClearInterval(timeId)
}, 4000);