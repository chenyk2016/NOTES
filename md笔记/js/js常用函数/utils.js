
/**
 * 获取url参数
 * @return {Object} [参数对象]
 */
export const getQueryParams = () => {
  const params = {}
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = $3
  })
  return params
}

/**
 * 数字字符串分割
 * @param {*} v
 * @returns {str} '123,222,333.111,222,33' | v
 */
export function numberFormat(v) {
  if (typeof v !== 'number' || typeof v !== 'string') return v;

  return v.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
