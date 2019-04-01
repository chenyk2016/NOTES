# react 入门学习

## 学习资料
### 1. 工程化[create-react-app](https://facebook.github.io/create-react-app/)

create-react-app 是官方提供的工程化方案，集成常用的配置工具，省去配置的工作。

[Create-React-App: A Closer Look](https://github.com/nitishdayal/cra_closer_look)
    介绍使用Create-React-App 的流程，并深入了解每个提供的脚本的功能，目的是使用解释Create-React-App“幕后”发生的情况。想要修改配置项，自定义配置，需要看这篇文章。

**目录说明**

    ├── node_modules/     # Installed packages necessary for Create-React-App
    ├── public/           # Static files
    │   ├── favicon.ico
    │   └── index.html
    ├── src/              # Application root
    │   ├── components/   # Application components
    │   │   ├── board.js
    │   │   ├── game.js
    │   │   └── square.js
    │   ├── index.css
    │   ├── index.js
    │   ├── logo.svg
    │   └── utils/        # Utility files: tools (like a custom string formatting function) to be utilized in multiple parts of the application
    │       └── index.js
    ├── package.json
    ├── README.md
    └── yarn.lock

#### 创建工程

    npx create-react-app my-app
    npx react-scripts my-app
    react-scripts
