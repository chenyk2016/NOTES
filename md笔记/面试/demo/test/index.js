class Observe {
  queue = {}
  constructor () {

  }

  add (type, cb) {
    console.log(1);
    if (this.queue[type] === undefined) {
      this.queue[type] = [cb]
    } else {
      this.queue[type].push(cb)
    }
  }

  remove(type, fn) {
    if (this.queue[type]) {
      for (let i = this.queue[type].length - 1; i >= 0; i--) {
        if (typeof this.queue[type][i] === 'function' && this.queue[type][i] === fn) {
          this.queue[type].splice(i, 1)
        }
      }
    }
  }

  dispatch(type, message) {
    if (this.queue[type]) {
      for (let i = this.queue[type].length - 1; i >= 0; i--) {
        this.queue[type][i](message)
      }
    }
  }
}

const observe = new Observe()
observe.add('msg', (msg) => {
  console.log(msg);
})
observe.dispatch('msg', 1)