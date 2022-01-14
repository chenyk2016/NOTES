
const PENDING = 'pending'
const REJECTED = 'rejected'
const FULFILLED = 'fulfilled'
/**
 *
 * - 链式调用
 * 有catch走catch, 没catch抛出错误
 * 任何一个里面的错误，都会被下一个补获到
 *
 * finally
 * - 不接受，不返回任何参数，后面的仍旧继承前面的值
 * - 但是error会被catch捕捉到
 * catch
 * - 接受上一个结果的返回的值
 * - 返回的结果会被当作下一个的值
 * - catch串联只有第一个会生效，catch抛出的异常会被下一个catch执行
 * then
 * - 接受上一个结果的返回的值
 * - 返回的结果会被当作下一个的值
 *
 * 问题一
 *
 */
class MyPromise {
  status = 'pending'
  callbacks = []
  preValue = undefined
  constructor(executor) {
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      // 执行报错
      this.reject(error)
    }
  }
  then(callback) {
    this.callbacks.push({
      type: FULFILLED,
      callback,
    })
    return this
  }
  catch(callback) {
    const preCb = this.callbacks[this.callbacks.length - 1] || {}
    this.callbacks.push({
      type: REJECTED,
      callback,
    })

    return this
  }
  finally(callback) {
    this.callbacks.push({
      type: '',
      callback
    })
    return this
  }

  prepareHandlerCallback(preStatus) {
    if(preStatus === PENDING) {
      // 微任务
      immediate(() => {
        this.handlerCallback()
      })
    } else {
      this.handlerCallback()
    };
  }
  handlerCallback () {
    const cbs = this.callbacks
    // 遇到finally直接执行
    const cbIndex = cbs.findIndex(v => !v.type || v.type === this.status)
    if(cbIndex !== -1) {
      const filledCb = cbs[cbIndex]
      cbs.splice(0, cbIndex + 1)

      this.doCallbacks(filledCb)
    }
  }
  isMyPromise(v) {
    return v instanceof MyPromise
  }
  doCallbacks(filledCb) {
    try {
      const preValue = filledCb.type === '' ? undefined : this.value
      const newValue = filledCb.callback(preValue)

      if (filledCb.type === '') {
        this.prepareHandlerCallback(this.status)
        return;
      }
      if(this.isMyPromise(newValue)) {
        newValue.then((v) => {
          this.resolve(v)
        }).catch(error => {
          this.reject(error)
        })
      } else {
        this.resolve(newValue)
      };
    } catch (error) {
      // throw error
      // 有catch走catch, 没catch跑出错误
      this.reject(error)
    }
  }

  resolve  = (value) => {
    const preStatus = this.status
    this.status = FULFILLED
    this.value = value
    this.prepareHandlerCallback(preStatus)
  }
  reject = (value) => {
    const preStatus = this.status
    this.status = REJECTED
    this.value = value
    this.prepareHandlerCallback(preStatus)
  }
}


function immediate (callbacks) {
  let counter = 1
  const observer = new MutationObserver(callbacks)
  const textNode = document.createTextNode(String(counter))
  observer.observe(textNode, {
    characterData: true
  })
  timerFunc = () => {
    counter = (counter + 1) % 2
    textNode.data = String(counter)
  }
  timerFunc()
}