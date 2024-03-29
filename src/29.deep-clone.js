/**
 * 深拷贝
 */

function deepClone(obj, hash = new WeakMap()) {
    if (obj === null) {
        return null;
    }

    if (obj instanceof Date) {
        return new Date(obj)
    }

    if (obj instanceof RegExp) {
        return new RegExp(obj)
    }

    if (typeof obj !== "object") {
        return obj;
    }

    if (hash.has(obj)) {
        return hash.get(obj);
    }

    const resObj = Array.isArray(obj) ? [] : {};
    hash.set(obj, resObj);

    Reflect.ownKeys(obj).forEach(key => {
        resObj[key] = deepClone(obj[key], hash)
    })

    return resObj;
}