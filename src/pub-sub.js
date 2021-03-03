const PubSub = {
    //订阅唯一id
    id:1,
    //频道与回调保存容器
    callbacks:{}
};

//订阅频道
PubSub.subscribe = function(channel,callback){
    //创建唯一编号
    let token = "token_"+this.id++;
    //判断callbacks 属性中是否存在pay
    if (this.callbacks[channel]) {
        this.callbacks[channel][token] = callback;
    } else {
        this.callbacks[channel] = {
            [token]:callback
        }
    } 
    //返回频道订阅的id
    return token;
}

//发布消息
PubSub.publish = function(channel,data){
    //获取当前频道中所有的回调
    if(this.callbacks[channel]){
        Object.values(this.callbacks[channel]).forEach(callback=>{
            //执行回调
            callback(data)
        })
    }
}

/**
 * 取消订阅
 *    1、没有传值，flag为undefined
 *    2、传入token字符串
 *    3、msgName字符串
 */
PubSub.unsubscribe = function(flag){
    if (flag === undefined) {
        this.callbacks = {}
    }else if (typeof flag === "string") {
        //判断是否为token_开头
        if (flag.indexOf('token_') === 0) {
            //如果是，表名是一个订阅id
            let callbackObj = Object.values(this.callbacks).find(ele=>ele.hasOwnProperty(flag))
            if (callbackObj) {
                delete callbackObj[flag]
            }
        }else{
            //表名是一个频道名称
            delete this.callbacks[flag]
        }
    }
}