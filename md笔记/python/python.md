# cli
~~~pythod

    python -V  # 查看检测

    python -m django --version # 查看包版本


~~~

## pip

pip是Python的一个包管理。

https://pip.pypa.io/en/stable/installation/

## python工具

1. 虚拟环境--virtualenv

```
# 安装
pip install virtualenv

## 为一个工程创建一个虚拟环境
$ cd my_project_dir
#venv为虚拟环境目录名，目录名自定义
$ virtualenv venv　　

```

## python 版本管理工具 pyenv

```bash
# 安装
brew install pyenv

```

### 使用

```bash
# 查看当前版本
pyenv version

# 查看所有版本
pyenv versions

# 查看所有可安装的版本
pyenv install --list

# 安装指定版本
pyenv install 3.6.5
# 安装新版本后rehash一下
pyenv rehash

# 删除指定版本
pyenv uninstall 3.5.2

# 指定全局版本
pyenv global 3.6.5

# 指定多个全局版本, 3版本优先
pyenv global 3.6.5 2.7.14
```
