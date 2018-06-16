#vue-router

路由变量

    router.push({ path: `/user/${userId}` }) // -> /user/123
    router.push({ path: '/user/'+userId }) // -> /user/123


## 同一个组件渲染在Route里不更新

解决办法：

1. 绑定key 但是这样会渲染多个组件， 有性能的损失。
[参考链接](https://segmentfault.com/q/1010000005952003)

    <router-view :key="$route.path"></router-view>

2. 怎么既重新加载组件，又不新渲染一个组件实例呢。