# react-template
保持最新 react 一系列相关的组件及框架的更新

- node v10.4.0
- webpack v4.12.0
- react v16.4.0
- react-router 4.4.0-alpha.0

## 开发进度及新功能
[开发进度](./TODO.md)

## 自己搭建 react 最新版一系列环境
[create-react-app](https://github.com/facebook/create-react-app) 是facebook官方推荐使用的工具

1. 使用 create-react-app `npm start` 相对较慢
2. 使用 create-react-app `npm run eject` 解放配置以后，修改配置感觉不干净（如加css模块化、加代理、加环境变量等）
3. 自己搭建可以使用各种最新的版本，且可以及时更新
4. 自己搭建配置文件可以相对规则干净
5. 学习（最主要的目的）

## 目录结构
config
src
mock
README.md
TODO.md

## 可以使用 `mao-cli` 生成当前模版
```bash
# 安装
yarn global add mao-cli or npm i -g mao-cli

# 使用
mao-cli create 项目名
```

