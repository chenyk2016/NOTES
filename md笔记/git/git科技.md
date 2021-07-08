提交代码时package-lock.json文件有冲突的话，最好别手动改这个文件，保证package.json没冲突的情况下，可以用npm i --package-lock-only自动解决下冲突哈


git commit --no-verify -m "commit"   就可以跳过代码检查


## git hooks 检查代码

hooks工具 husky

https://github.com/typicode/husky

https://typicode.github.io/husky/#/?id=manual

### 安装
```
npm install -D husky

npx husky install
```

### 配置 pre-commit 进行eslint检查

>使用: lint-staged  可以只检查本次提交所修改的文件
> https://github.com/okonet/lint-staged

安装 `lint-staged`

`npm i -D lint-staged`

执行命令（npm7+）
`npx husky add .husky/pre-commit "npm run pre-commit"`

执行后会看到package.json多了一个script
```json
"scripts": {
  "pre-commit": "lint-staged"
}
```


`package.json`增加lint-staged配置

```json
"lint-staged": {
  "*.{js,jsx}": [
    "eslint --fix"
  ]
}
```


### 配置`commit-msg` 检查commit信息是否规范

安装

`npm install --save-dev @commitlint/config-conventional @commitlint/cli`

配置:

`npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`
