
/**
 *
 * @param {*} val 10进制数字
 * @param {*} radix 进制
 */
function transform(val, radix) {
  if(radix < 2) {
    throw ('转换的进制不符合要求')
  }
  let res = []
  let resStr = ''
  let pos = 0
  let resV = val
  while(resV !== 0) {
    const posV = Math.floor(resV / Math.pow(radix, pos) )
    if(posV === 0) {
      const preMax = Math.pow(radix, pos - 1)
      res[pos - 1] = Math.floor(resV / preMax )
      resV = resV % preMax
      pos = 0
    } else {
      pos++
    };
  }

  for(let i = res.length - 1; i >= 0 ; i--) {
    let v = res[i] || 0
    if(v > 10) {
      v = String.fromCharCode(v - 10 + 97)
    }
    resStr += v
  };

  return resStr
}

console.log( transform(31, 16) ); // 1f
console.log( transform(31, 8) ); // 37
console.log( transform(31, 32) ); // v
console.log( transform(31, 10) ); // 31
console.log( transform(31, 2) ); // 11111
