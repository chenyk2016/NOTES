
/**
 *
 * @param {*} num 某进制下的数据
 * @param {*} radix 进制的类型
 */
function retransfer(num, radix) {
  const str = num.toString()
  const l = str.length


  return str.split('').reduce((pre, v, i) => {
    let numV = /[a-z]/.test(v) ? (v.charCodeAt(0) - 97 + 10) : v

    return numV < radix ? pre + numV * Math.pow(radix, l - 1 - i) : NaN
  }, 0)
}

console.log( retransfer('1f', 16) ); // 31
console.log( retransfer('37', 8) ); // 31
console.log( retransfer('v', 32) ); // 31
console.log( retransfer('z', 32) ); // NaN
console.log( retransfer('31', 10) ); // 31
console.log( retransfer('11111', 2) ); // 31