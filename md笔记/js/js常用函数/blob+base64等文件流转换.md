# blob base64等文件流

## 文件流转文件

```javascript
var content = "file content!";
var data = new Blob([content],{type:"text/plain;charset=UTF-8"});
var downloadUrl = window.URL.createObjectURL(data);
var anchor = document.createElement("a");
anchor.href = downloadUrl;
anchor.download = "文件名.txt";
anchor.click();
window.URL.revokeObjectURL(data);
```

BUFFer, blob, base64, 等数据之间的关系与转换方式。

## blob to base64

```js
var reader = new FileReader();
reader.readAsDataURL(blob);
reader.onloadend = function () {
  var base64data = reader.result;
  console.log(base64data);
}
```

## base64ToBlob

```js
function base64ToBlob (base64data: string) {
  const bytes = window.atob(base64data.split(',')[1])

  //处理异常,将ascii码小于0的转换为大于0
  var ab = new ArrayBuffer(bytes.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  const blob = new Blob([ab], { type: 'image/png' });
  return blob;
}
```

## blob to urlObject

```javascript
const url = window.URL.createObjectURL(blob);
```