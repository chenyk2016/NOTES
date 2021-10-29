# electron 记录

## github demo


## mac平台打包windows安装包

注意: 目前只能 macOS 10.8 至 10.14 的才能打包，因为别的wine不支持。
[具体看](https://wiki.winehq.org/Download_zhcn)

[官方文档](https://github.com/electron/electron-packager#building-windows-apps-from-non-windows-platforms)

需要安装wine:

```bash
brew install --cask wine-stable
```

## electron 命令行参数

target:

- Windows (also known as win32, for x86, x86_64, and arm64 architectures)
- macOS (also known as darwin) / Mac App Store (also known as mas)* (for x86_64 and arm64 architectures)
- Linux (for x86, x86_64, armv7l, arm64, and mips64el architectures)

arch:

- x64
