function axios({ method, url, params, data }) {
    method = method.toUpperCase();
    return new Promise((resolve, reject) => {
        //1、创建对象
        const xhr = new XMLHttpRequest();
        console.log('xhr :>> ', xhr);
        //2、初始化
        //处理params对象 a=100&b=200
        let str = "";
        for (const key in params) {
            str += `${key}=${params[key]}&`
        }
        str = str.slice(0, -1);
        xhr.open(method, url + '?' + str);
        //3、发送
        if (method === "POST" || method === "PUT" || method === "DELETE") {
            //Content-type mime类型设置
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
            //设置请求体
            xhr.send(JSON.stringify(data));
        } else {
            console.log('xhr :>> ', xhr);
            xhr.send();
        }
        //设置响应结果的类型是 JSON
        xhr.responseType = 'json';
        //4、处理结果
        xhr.onreadystatechange = function () {

            if (xhr.readyState === 4) {
                //判断响应状态码
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({
                        status: xhr.status,
                        message: xhr.statusText,
                        body: xhr.response
                    })
                } else {
                    reject(new Error('请求失败，失败状态码为' + xhr.status))
                }
            }
        }
    })
}

/* 发送特定请求的静态方法 */
axios.get = function (url, options) {
    return axios(Object.assign(options, { url, method: 'GET' }))
}
axios.delete = function (url, options) {
    return axios(Object.assign(options, { url, method: 'DELETE' }))
}
axios.post = function (url, data, options) {
    return axios(Object.assign(options, { url, data, method: 'POST' }))
}
axios.put = function (url, data, options) {
    return axios(Object.assign(options, { url, data, method: 'PUT' }))
}