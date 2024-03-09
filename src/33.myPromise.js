const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
    constructor(executor) {
        this.state = PENDING;
        this.value = null;
        this.reason = null;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if (this.state === PENDING) {
                this.state = FULFILLED;
                this.value = value;
                this.onFulfilledCallbacks.forEach((callback) => callback(this.value));
            }
        };

        const reject = (reason) => {
            if (this.state === PENDING) {
                this.state = REJECTED;
                this.reason = reason;
                this.onRejectedCallbacks.forEach((callback) => callback(this.reason));
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            const onFulfilledCallback = (value) => {
                try {
                    const result = onFulfilled ? onFulfilled(value) : value;
                    if (result instanceof MyPromise) {
                        result.then(resolve, reject);
                    } else {
                        resolve(result);
                    }
                } catch (error) {
                    reject(error);
                }
            };

            const onRejectedCallback = (reason) => {
                try {
                    const result = onRejected ? onRejected(reason) : reason;
                    if (result instanceof MyPromise) {
                        result.then(resolve, reject);
                    } else {
                        resolve(result);
                    }
                } catch (error) {
                    reject(error);
                }
            };

            if (this.state === FULFILLED) {
                onFulfilledCallback(this.value);
            } else if (this.state === REJECTED) {
                onRejectedCallback(this.reason);
            } else {
                this.onFulfilledCallbacks.push(onFulfilledCallback);
                this.onRejectedCallbacks.push(onRejectedCallback);
            }
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    static resolve(value) {
        return new MyPromise((resolve) => {
            resolve(value);
        });
    }

    static reject(reason) {
        return new MyPromise((_, reject) => {
            reject(reason);
        });
    }

    static all(promises) {
        return new MyPromise((resolve, reject) => {
            const results = [];
            let count = 0;

            promises.forEach((promise, index) => {
                promise.then((value) => {
                    results[index] = value;
                    count++;
                    if (count === promises.length) {
                        resolve(results);
                    }
                }).catch(reject);
            });
        });
    }

    static race(promises) {
        return new MyPromise((resolve, reject) => {
            promises.forEach((promise) => {
                promise.then(resolve).catch(reject);
            });
        });
    }
}


new Promise((resolve, reject)=>{
    resolve(1)
}).then((res)=>{
    console.log('res',res)
}).catch((err)=>{
    console.log('err',err)
})
