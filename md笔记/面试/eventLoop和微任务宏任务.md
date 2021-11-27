# eventLoop和微任务宏任务

事件循环，就是js执行完同步任务之后，就回去查看异步任务对列，看是否有回掉完成，需要执行。
这样一个循环的过程。

阮老师介绍event loop <http://www.ruanyifeng.com/blog/2014/10/event-loop.html>

## 微任务和宏任务

> 参考文档<https://zhuanlan.zhihu.com/p/78113300>

### 宏任务

(macro)task，可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）。

浏览器为了能够使得JS内部(macro)task与DOM任务能够有序的执行，会在一个(macro)task执行结束后，在下一个(macro)task 执行开始前，对页面进行重新渲染，流程如下：

(macro)task->渲染->(macro)task->...

**宏任务包含**

```json
script(整体代码)
setTimeout
setInterval
I/O
UI交互事件
postMessage
MessageChannel
setImmediate(Node.js 环境)
```
### 微任务

microtask,可以理解是在当前 task 执行结束后立即执行的任务。也就是说，在当前task任务后，下一个task之前，在渲染之前。

所以它的响应速度相比setTimeout（setTimeout是task）会更快，因为无需等渲染。也就是说，在某一个macrotask执行完后，就会将在它执行期间产生的所有microtask都执行完毕（在渲染前）。

**微任务包含：**

```json
Promise.then
Object.observe
MutationObserver
process.nextTick(Node.js 环境)
```

## 运行机制

在事件循环中，每进行一次循环操作称为 tick，每一次 tick 的任务处理模型是比较复杂的，但关键步骤如下：

- 执行一个宏任务（栈中没有就从事件队列中获取）
- 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
- 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
- 当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染
- 渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）

![picture 1](images/pic_1637221603628.png)
