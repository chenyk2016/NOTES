// 动态规划

console.log('动态规划');
console.log('1. 硬币找零');

// 找出最少找零硬笔数
function minChange() {
  const coins = [1, 5, 10, 25]
  const cache = {}

  function getChange (target) {
    if(!target) {
      return []
    }
    if(cache[target]) {
      return cache[target]
    }

    // 无法找零
    // if(coins.length === 0 || target < maxCoin) {
    //   throw new Error(`${target} 无法找零`)
    // }
    let min = [], newMin
    coins.forEach((coin, index) => {
      const newT = target - coin

      if(newT >= 0) {
        newMin = getChange(newT)
      }

      if(newT >= 0 &&
        (newMin.length < min.length - 1 ||  !min.length)
        && (newMin.length || !newT)
        ) {
        min = [coin].concat(newMin)

        console.log(`new min ${min} for ${target}`);
      }
    })

    return (cache[target] = min)

    // function isEnd(coin) {
    //   return .length * coin < target
    // }
  }

  console.log(getChange(36), cache);
}

// minChange()


console.log('2. 背包问题');

/**
 * 1. 背包设定最大负重
 * 2. 一组物品，不同价值，放进背包
 * 3. 求能放进的最大价值
*/

function maxValueBag() {
  const limit = 5
  const goodsMap = [
    [2, 3], // 重量 价值
    [3, 4],
    [4, 5]
  ]

  const cache = {}

  function getGoods(target) {

    if(target <= 0) {
      return []
    }

    if(cache[target]) {
      return cache[target]
    }

    let min = [], newMin
    goodsMap.forEach(item => {
      const w = item[0]
      const newT = target - w

      if(newT >= 0) {
        newMin = getGoods(newT)
      }

      // min不存在时，赋初始值值
      if(!min.length && newT >= 0) {
        min = [item].concat(newMin)
      }

      // newMin存在，或者newT为0时，比较价值
      if(min.length && (newMin.length || !newT)) {
        const newVal = [item].concat(newMin).reduce((sum, v) => {
          return sum + v[1]
        }, 0)

        const val = min.reduce((sum, v) => {
          return sum + v[1]
        }, 0)

        if(newVal > val) {
          min = [item].concat(newMin)
        }
      }
    })

    return (cache[target] = min)
  }


  console.log(getGoods(5), cache);
}

maxValueBag()
