# git

分布式版本控制系统

## 简易的命令行入门教程:
克隆仓库:

    $ git clone url
    # 克隆到指定目录
    $ git clone url [dir]

创建 git 仓库:

    $ mkdir gittest
    $ cd gittest
    $ git init
    $ touch README.md
    $ git add README.md
    $ git commit -m "first commit"
    $ git remote add origin [url]
    $ git push -u origin master

将已有项目关联上传远程库

    $ cd existing_git_repo
    $ git remote add origin [url]
    $ git push -u origin master

获取分支，与当前比较不同，并合并

```bash
# 获取develope，并储存在temp分支中
git fetch origin develope:temp

git diff
# temp分支与当前合并
git merge temp
```


## Git 全局设置:

    # 查看当前配置
    $ git config --list

    # 设置提交代码的用户信息
    $ git config --global user.name "用户名"
    # 设置了邮箱，会通过邮箱自动关联用户名
    $ git config --global user.email "邮箱"

    # 测试连接
    $ ssh -T git@github.com

## ssh
查看是否已经有了ssh密钥

    $ cd ~/.ssh

生成秘钥, 有三个提示，直接enter

    $ ssh-keygen -t rsa -b 4096 -C “your_email@example.com”

然后出现下面的提示，生成公密钥，密码等，密码可为空

    # Generating public/private rsa key pair.
    # Enter file in which to save the key (/Users/ykchen/.ssh/id_rsa):
    # Enter passphrase (empty for no passphrase):

复制公钥

    # mac命令：
    $ pbcopy < ~/.ssh/id_rsa.pub

在命令行打印公钥，手动复制

    $ cat ~/.ssh/id_rsa.pub

去github的setting下添加公钥。

## 新建代码库

    # 在当前目录新建一个代码库
    $ git init

    # 新建一个代码库将其初始化为git仓库
    $ git init [name]

    # 克隆项目到当前目录
    $ git clone [url]

## 远程操作

    # 查看远程仓库
    $ git remote -v

    # 显示某个分支关联的远程仓库的信息
    $ git remote show [remote]

    # 移除关联的名为origin的远程仓库
    $ git remote rm origin

    # 关联远程仓库
    $ git remote add gitee git@gitee.com:**/**.git

    # 添加远程仓库源
    $ git remote set-url --add origin 地址

## 查看库状态（有无冲突、更新、提交等）

    $ git status

## 提交

    # 提交暂存区到仓库区
    $ git commit -m [message]

    # 提交暂存区的指定文件到仓库区
    $ git commit [file1] [file2] ... -m [message]

    # 提交工作区自上次commit之后的变化，直接到仓库区
    $ git commit -a

    # 提交时显示所有diff信息
    $ git commit -v

    # 使用一次新的commit，替代上一次提交
    # 如果代码没有任何新变化，则用来改写上一次commit的提交信息
    $ git commit --amend -m [message]

    # 重做上一次commit，并包括指定文件的新变化
    $ git commit --amend [file1] [file2] ...

    # 跳过git hooks
    $ git commit -n -m "msg"
## 推送代码到远程库

    # 推送到远程库
    # 由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的
    # master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分
    # 支关联起来，在以后的推送或者拉取时就可以简化命令。

    $ git push [-u] '远程名称' '分支名称'

    $ git push <远程仓库名> <本地分支名>:<远程分支名>

    # 强制提交
    $ git push -f origin master

    # 强行推送当前分支到远程仓库，即使有冲突
    $ git push [remote] --force

    # 推送所有分支到远程仓库
    $ git push [remote] --all


### 更新代码

    # 取回远程仓库的变化，并与本地分支合并
    $ git pull

    $ git fetch origin [originBranch:newBranch]
    $ git merge origin/next

### 增加删除

    # 添加资源 .代表全部文件
    git add [.|文件名]

    # 添加每个变化前，都会要求确认
    # 对于同一个文件的多处变化，可以实现分次提交
    $ git add -p

    # 删除工作区文件，并且将这次删除放入暂存区
    $ git rm [file1] [file2] ...

    # 停止追踪指定文件，但该文件会保留在工作区
    $ git rm --cached [file]

    # 改名文件，并且将这个改名放入暂存区
    $ git mv [file-original] [file-renamed]

### 分支

    # 清除git 远程分支列表缓存
    $ git fetch -p

    # 列出所有本地分支
    $ git branch

    # 列出所有远程分支
    $ git branch -r

    # 列出所有本地分支和远程分支
    $ git branch -a

    # 获取分支关联的远程信息
    $ git branch -vv

    # 新建一个分支，但依然停留在当前分支
    $ git branch [branch-name]

    # 新建一个分支，并切换到该分支
    $ git checkout -b [branch]

    # 从某个分支或commit新建一个分支，并切换到该分支
    $ git checkout originName/[oldbranch|commitId] -b [branch]

    # 新建一个分支，与指定的远程分支建立追踪关系
    $ git branch --track [branch] [remote-branch]

    # 切换到指定分支，并更新工作区
    $ git checkout [branch-name]

    # 切换到上一个分支
    $ git checkout -

    # 建立追踪关系，在现有分支与指定的远程分支之间
    $ git branch --set-upstream [branch] [remote-branch]

    # 合并指定分支到当前分支
    $ git merge [branch]

    # 选择一个commit，合并进当前分支
    $ git cherry-pick [commit]

    # 删除分支 需要在别的分支上才能删除
    $ git branch -d [branch-name]

    # 删除远程分支
    $ git push origin --delete [branch-name]
    $ git branch -dr [remote/branch]

    # 修改分支名称
    $ git branch -m [oldName] [newName]

### 标签

    # 列出所有tag
    $ git tag

    # 新建一个tag在当前commit
    $ git tag [tag]

    # 新建一个tag在指定commit
    $ git tag [tag] [commit]

    # 删除本地tag
    $ git tag -d [tag]

    # 删除远程tag
    $ git push origin :refs/tags/[tagName]

    # 查看tag信息
    $ git show [tag]

    # 提交指定tag
    $ git push [remote] [tag]

    # 提交所有tag
    $ git push [remote] --tags

    # 新建一个分支，指向某个tag
    $ git checkout -b [branch] [tag]

### 历史记录

    # 显示当前分支的版本历史
    git log

    # 回到某个版本
    git reset --hard commit_id

    # 查看命令记录
    git reflog

    # 显示某个文件的版本历史，包括文件改名
    $ git log --follow [file]
    $ git whatchanged [file]

### 撤销

    # 恢复暂存区的指定文件到工作区
    $ git checkout [file]

    # 恢复某个commit的指定文件到暂存区和工作区
    $ git checkout [commit] [file]

    # 恢复暂存区的所有文件到工作区
    $ git checkout .

    # 取消上一个commit的提交
    $ git reset --soft HEAD^

    # 取消上n个commit的提交
    $ git reset --soft HEAD~n

    # 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
    $ git reset [file]

    # 重置暂存区与工作区，与上一次commit保持一致
    $ git reset --hard

    # 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
    $ git reset [commit]

    # 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
    $ git reset --hard [commit]

    # 重置当前HEAD为指定commit，但保持暂存区和工作区不变
    $ git reset --keep [commit]

    # 新建一个commit，用来撤销指定commit
    # 后者的所有变化都将被前者抵消，并且应用到当前分支
    $ git revert [commit]

    # 强制放弃本地分支记录和远程同步。
    $ git reset --hard origin/[branch]

    # 暂时将未提交的变化移除，稍后再移入
    $ git stash
    $ git stash pop

### 提交转移

    # 将一个分支的cmmit转移到别的分支上
    $ git cherry-pick commit1 commit2 ...

### 其他

    # 生成一个可供发布的压缩包
    $ git archive

    # 当前分支名称
    $ git rev-parse --abbrev-ref HEAD

### 项目迁移

    # 先克隆仓库
    # --bare 创建的克隆版本库都不包含工作区，直接就是版本库的内容。
    $ git clone --bare git://gitlab.com/test/bak.git

    # 移除关联的名为origin的远程仓库
    $ git remote rm origin

    # 关联新的远程仓库
    $ git remote add gitee git@gitee.com:**/**.git

    # 仓库镜像上传, 将仓库和版本记录上传
    $ git push --mirror git@newpath/test/new.git

### 推荐阅读和参考：
[阮一峰-常用 Git 命令清单](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)
[廖雪峰-git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)



### 其他相关

~ 会匹配最近的小版本依赖包，比如~1.2.3会匹配所有1.2.x版本，但是不包括1.3.0
^ 会匹配最新的大版本依赖包，比如^1.2.3会匹配所有1.x.x的包，包括1.3.0，但是不包括2.0.0
* 这意味着安装最新版本的依赖包

### 设置镜像

npm config set registry https://registry.npm.taobao.org --global

npm config set disturl https://npm.taobao.org/dist --global

// 配置后可通过下面方式来验证是否成功
npm config get registry
npm config get disturl

// 官方
npm config set registry https://registry.npmjs.org --global
npm config set disturl https://nodejs.org/dist/ --global

### git骚操作

1. 删除多个分支

  # 强制删除所有分支（慎用，有些本地修改你可能没有提交）
  git branch |xargs git branch -D

  # 删除本地所有与远程仓库同步分支（本地修改过未提交的不会删除）
  git branch |xargs git branch -d

  删除本地部分分支，有选择条件（同2）
  git branch |grep "macth"|xargs git branch -d

2. 切换到新的远程分支

  # 查看分支和远程的关联情况
  git remote show origin

  # 有远程分支，直接关联
  git branch --set-upstream [branch] [remote-branch]

  # 无远程，提交关联
  git push --set-upstream origin [newbranch]
