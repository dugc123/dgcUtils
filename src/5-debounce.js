/*
 * @Desc: 函数防抖,
 * 触发高频事件后n秒后函数只会执行一次，如果n秒内高频事件再次被触发，则需要重新计算时间。
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
