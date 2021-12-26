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