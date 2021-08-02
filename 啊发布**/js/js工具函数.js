// 数组去重


// 计算js变量占用的内存大小
const typeSizes = {
    'undefined': () => 0,
    'boolean': () => 4,
    'number': () => 8,
    'string': item => 2 * item.length,
    'object': item => !item ? 0 : Object
        .keys(item)
        .reduce((total, key) => sizeOf(key) + sizeOf(item[key]) + total, 0)
}

function sizeOf (value) {
    return window.typeSizes[typeof value](value)
}
