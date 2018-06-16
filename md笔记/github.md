# github
    // 添加资源 [.|文件名]
    git add readme.txt 
    // 提交保存
    git commit -m "branch test"
    // 查看库状态（有无冲突、更新、提交等）
    git status
    // 查看用户信息
    git config --list

## 分支
    
    // 创建并切换到分支
    git checkout -b dev
    // 查看分支
    git branch
    // 切换到分支
    git checkout dev
    // 合并分支
    it merge dev
    // 删除分支
    git branch -d dev


## 远程

    // 查看远程仓库
    git remote -v
    // 移除关联的名为origin的远程仓库
    git remote rm origin
    // 关联远程仓库
    git remote add gitee git@gitee.com:chenyk2016/BONC-20180502-sjtb.git

## 提交远程

推送到远程库
由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。
    
    git push [-u] '远程名称' '分支名称'

## ssh
    // 查看是否已经有了ssh密钥
    $ cd ~/.ssh
    $ ssh-keygen -t rsa -C "@example.com"

# gitee
简易的命令行入门教程:
Git 全局设置:

    git config --global user.name "chenyk2016"
    git config --global user.email "1416467526@qq.com"
    // 测试连接
    $ ssh -T git@github.com


创建 git 仓库:

    mkdir giteetest
    cd giteetest
    git init
    touch README.md
    git add README.md
    git commit -m "first commit"
    git remote add origin https://gitee.com/chenyk2016/giteetest.git
    git push -u origin master
已有项目?

    cd existing_git_repo
    git remote add origin https://gitee.com/chenyk2016/giteetest.git
    git push -u origin master

























