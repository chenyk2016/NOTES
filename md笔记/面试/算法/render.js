// 模版引擎 {{  }}
function render(str, values) {
  const reg = /\{\{([\w|\s]+)\}\}/g

  if(reg.test(str)) {
    const newStr = str.replace(reg, (match, name) => {
      return values[name.trim()] || ''
    })
    return newStr
  }
  return str
}


console.log( render('1111{{ a }} | {{c}} | {{ b }} 222', { a: '---', b: '===' }) )
