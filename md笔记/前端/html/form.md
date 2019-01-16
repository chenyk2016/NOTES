

1. FormData

FormData里的数据一类似于私有属性的方式储存，
必须通过 `instance.get(key)` 来获取

2. form表单提交不跳转

	html
	
	~~~html
	<form id="fileForm" enctype="multipart/form-data" type="post">
	  <p class="inp_wrap">
	  	<span class="upload_wrap">
				<label for="upload" class="upload_label ">{{uploadFile}}</label>
				<input id="upload" type="file" class="upload" name="uploadFile"  v-on:change="fileChange"/>
			</span>
			<input class="item_submit " type="button" id="submit" value="上传" @click="upload"/>
			<!-- <button @click="upload">上传</button> -->
			<label for="submit" class="upload_label el-icon-upload2"></label>
	  </p>
	</form>	
	~~~

	js

	~~~js
	$.ajax({
		url: _vue.path.exlceUpload,
		type: 'post',
		processData: false, // 不处理数据
  	contentType: false, // 设置数据类型
		data: formData,
		success: function(res){
			// res = JSON.stringify(res)
			if (res && res.statusCode==='1' ) {
				_vue.$message({
          type: 'success',
          message: '上传成功!'
        });
			}else{
				_vue.$message({
          type: 'warning',
          message: '上传失败! 失败原因: '+ (res.statusInfo||'')
        });
			}
			// 清空
			_vue.uploadFile = '选择上传的文件';
		},
		error: function(err){
			var code = err.status||'',
					msg = err.responseText||'';
			_vue.$message({
        type: 'error',
        message: '发生错误无法上传! 错误信息：错误代码'+ code + ' , 错误信息：' + msg
      });
		}
	})
	~~~

3. form表单清空

	formele.reset()