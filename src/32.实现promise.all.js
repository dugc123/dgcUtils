const PromiseAll = (promises) => {
    return new Promise((resolve, reject) => {
        const results = []; // 用于存放所有 Promise 对象的返回值
        let count = 0; // 记录已经处理的 Promise 对象的数量

        const processResult = (index, result) => {
            results[index] = result; // 将 Promise 对象的返回值存入 results 数组
            count++; // 增加计数器

            // 如果所有 Promise 对象都已经处理完毕，则调用 resolve 方法，将 results 数组作为参数传入
            if (count === promises.length) {
                resolve(results);
            }
        };

        // 遍历参数中的所有 Promise 对象
        promises.forEach((promise, index) => {
            // 对每个 Promise 对象进行处理
            Promise.resolve(promise)
                .then((result) => {
                    // 如果该 Promise 对象状态变为 resolved，则调用 processResult 方法将其返回值存入 results 数组中
                    processResult(index, result);
                })
                .catch((error) => {
                    // 如果其中有一个 Promise 对象状态变为 rejected，则直接调用 reject 方法，将该 Promise 对象的返回值作为参数传入
                    reject(error);
                });
        });
    });
};

PromiseAll([Promise.resolve(()=>console.log(1)),Promise.resolve(()=>console.log(2))]).then(res=>{
    console.log('res',res)
})