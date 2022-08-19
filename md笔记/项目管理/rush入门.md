# rush

- 单个npm文件: Rush 将所有项目的所有依赖项安装到一个公共文件夹中。
- 自动link: 您的所有项目都会自动相互link
- 子集和增量构建
  - `rush rebuild --to <project>` 仅对上游依赖项进行干净构建
  - `rush rebuild --from <project>` 仅对受影响的下游项目进行干净构建
- 循环依赖
- 批量发布
- 变更日志跟踪

## 安装

 ```bash
 # 全局安装
 npm install -g @microsoft/rush

 # 帮助
 rush -h
 ```

## rush demo

```bash
$ git clone https://github.com/microsoft/rushstack
$ cd rushstack

# Install the NPM packages:
# (If you don't have a GitHub email configured, add the "--bypass-policy" option.)
$ rush update

# Incremental install:
$ rush update  # <-- instantaneous!

# Force all projects to be rebuilt:
$ rush rebuild

# Incremental build:
$ rush build    # <-- instantaneous!

# Use "--verbose" to view the console logs for each project as it is built.
# Projects build in parallel processes, but their logs are collated.
$ rush rebuild --verbose

```