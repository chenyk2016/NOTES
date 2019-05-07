
## disable
You may use special comments to disable some warnings.

```
关闭下一行校验
// eslint-disable-next-line

关闭整个文件校验
/* eslint-disable */

关闭全等判断校验
/* eslint eqeqeq: "off" */

声明全局变量
/* global $ */

/* eslint-disable no-new */

```

## 配置

vue 项目 `.eslintrc.js` 配置

```js
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'eqeqeq': "off"
  }
}
```
