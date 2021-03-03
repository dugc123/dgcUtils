/*
 * @Desc: 函数防抖
 * @Date: 2021-02-25 15:15:30
 */
function debounce(callback,time){
    //定时器变量
    let timeId = null;
    //返回一个函数
    return function(e){
        if (timeId !== null) {
            clearTimeout(timeId)
        }
        //启动定时器
        timeId = setTimeout(() => {
            //执行回调
            callback.call(this,e);
            //重置定时器变量
            timeId = null;
        }, time);
    }
}
