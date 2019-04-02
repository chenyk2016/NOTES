import 'babel-polyfill'
import promise from 'es6-promise'
// IE9兼容
import './requestAnimationFrame.js'
// IE9兼容
import 'ie-placeholder'
// IE9 classList不存在兼容
import 'classlist-polyfill'
import './index.css'
// 解决iview在IE10以下选择框无效的问题
import ElementDataset from 'element-dataset'

ElementDataset()
promise.polyfill()
