
/**
 *
 * @param {*} val 10进制数字
 * @param {*} type 进制
 */
function transform(val, type) {
  if(type < 2) {
    throw ('转换的进制不符合要求')
  }
  let res = []
  let resStr = ''
  let pos = 0
  let resV = val
  while(resV !== 0) {
    const posV = Math.floor(resV / Math.pow(type, pos) )
    if(posV === 0) {
      const preMax = Math.pow(type, pos - 1)
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
      v = String.fromCharCode(v - 10 + 96)
    }
    resStr += v
  };

  // console.log(res);

  return resStr
}

console.log( transform(32, 16) );
console.log( transform(15, 8) );
console.log( transform(1000, 10) );
console.log( transform(10, 2) );
