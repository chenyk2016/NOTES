import fmt from './fmt';

export const count = (obj) => {
  let objType = typeof obj;
  if (objType === "string"){
    return obj.length;
  } else if (objType === "object") {
    let objLen = 0;
    for (let k in obj){
      if (obj.hasOwnProperty(k)) {
        ++objLen;
      }
    }
    return objLen;
  }
  return false;
};

/**
 * 复制文本到粘贴板
 */
export const copyToClipBoard = (text) => {
  let $input = document.createElement('input');
  $input.value = text;
  document.body.appendChild($input);

  $input.select();
  document.execCommand('Copy');

  document.body.removeChild($input);
};

export const handleGreyEnv = (env) => {
  if (typeof env === 'undefined') {
    return true;
  }
  return env;
};

/**
 * 格式化函数转为Vue的过滤器
 * @param Vue
 */
export function fmtToFilters(Vue) {
  for (let k in fmt) {
    if (!fmt.hasOwnProperty(k)) continue;
    Vue.filter(k, fmt[k]);
  }
}

/**
 * 判断是否是移动端
 * @return {Boolean}
 */
export function isMobile () {
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
}

/**
 * 判断是否为android设备
 * @return boolean
 */
export function isAndroid () {
  return /Android|Adr|MuMu/i.test(navigator.userAgent);
}

/**
 * [isMacOs 是否是mac]
 * @return {Boolean}
 */
export function isMacOS() {
  return /macintosh|mac os x/i.test(navigator.userAgent);
}

/**
 * [isWin32 windows 32位系统]
 * @return {Boolean}
 */
export function isWin32() {
  return /win32|wow32/i.test(navigator.userAgent);
}

/**
 * [isWin64 windows 64位系统]
 * @return {Boolean}
 */
export function isWin64() {
  return /win64|wow64/i.test(navigator.userAgent);
}

/**
 * 过滤 <script>
 * 防止用户输入一些恶意的内容，比如说输入一个<script>这样的一个标签，注入脚本
 * @param str
 * @return str
 */
export function preventXSS (str) {
  return str.replace(/</ig, '&lt;').replace(/>/ig, '&gt;');
}

/**
 * 解析 preventXSS 处理过的内容。
 * 非DOM元素解析方式，可以直接插入, 例如模版语法 {{}}
 * @param str
 * @return str
 */
export function parseXSS (str) {
  return (str || '').replace(/&lt;/ig, '<').replace(/&gt;/ig, '>');
}

/**
 * 向RN发送消息
 * @param event 事件
 * @param payload 附加数据
 * @return undefined
 */
export function postMessage (event, payload = {}) {
  try {
    let msg = { event, payload };

    // 兼容 react-native-webview
    if (window.ReactNativeWebView) {
      // https://github.com/react-native-community/react-native-webview/releases/tag/v5.0.0
      // window.postMessage(data, *) has been changed to
      // window.ReactNativeWebView.postMessage(data)
      window.ReactNativeWebView.postMessage(JSON.stringify(msg));
    } else {
      window.postMessage(JSON.stringify(msg), '*');
    }
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
}
