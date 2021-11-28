/**
 * Symbol 特点:

    1） Symbol 的值是唯一的，用来解决命名冲突的问题

    2） Symbol值不能与其他数据进行运算

    3） Symbol定义的对象属性不能使用 for…in 循环遍历，但是可以使用Reflect.ownKeys 来获取对象的所有键名
 */
/**
 * 如何让一个对象可遍历
 */
const obj = {
    count:0,
    //加迭代器
    [Symbol.iterator]:()=>{
        return {
            next:()=>{
                obj.count++;
                if (obj.count <= 10) {
                    return {
                        value:obj.count,
                        done:false
                    }
                }else{
                    return {
                        value:undefined,
                        done:true
                    }
                }
            }
        }
    }
}

for (const item of obj) {
    console.log(item);//1 2 3 4 5 6 7 8 9 10
}