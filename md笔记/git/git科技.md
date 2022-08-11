提交代码时package-lock.json文件有冲突的话，最好别手动改这个文件，保证package.json没冲突的情况下，可以用npm i --package-lock-only自动解决下冲突


git commit --no-verify -m "commit"   就可以跳过代码检查


## 清除git密码缓存

git config --global --unset credential.helper

重新设置密码缓存

git config credential.helper store

## npm安装github包

npm install git+https://xieyufang@gitlab.innotechx.com/x/report-wxa.git

## npm引用多个仓库

指定npmrc