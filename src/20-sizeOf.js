//统计对象所占的字节数
const seen = new WeakSet();

function sizeOfObject(object){
    if (object === null) {
        return 0;
    }else{
        let bytes = 0;
        const keys = Object.keys(object);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            if (typeof object[key] ==="object" && object[key] !== null) {
                if (seen.has(object[key])) {
                    continue;
                }
                seen.add(object[key]);
            }
            bytes += calculator(key);
            bytes += calculator(object[key]);
        }
        return bytes;
    }
}


function calculator(object){
    const objectType = typeof object;
    switch(objectType){
        case "string":{
            return object.length * 2; 
        }
        case "boolean":{
            return 4;
        }
        case "number":{
            return 8;
        }
        case "object":{
            if (Array.isArray(object)) {
                return object.map(item=>calculator(item)).reduce((a,b)=>a+b,0);
            }else{
                return sizeOfObject(object)
            }
        }
        default:{
            return 0;
        }
    }
}

const obj = [1,"123",{a:1,b:false,c:"98"}];

console.log('calculator',calculator(obj));
