## 构建

### 1. 添加eslint & typescript 

```
npm install -D eslint typescript 
Tips: 推荐使用eslint 7版本, 8版本与webstorm有兼容性问题 
```

### 2. 添加解析器 & 规则 

```
解析器
npm install -D @typescript-eslint/parser 
规则插件
npm install -D @typescript-eslint/eslint-plugin

demo:
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": ["plugin:@typescript-eslint/recommended"] // 使用推荐的规则
  "rules": {
    "@typescript-eslint/rule-name": "error" // 自定义的typescript规则
  }
}
 
```

### 3. 添加husky & lint-staged 

```
npm install -D husky@4.3.5
npm install -D lint-staged

demo: 
"lint-staged": {
    "src/**/*.{ts,tsx}": [
      "prettier --write",
      "eslint",
      "git add"
    ],
    "src/**/*.{scss,css}": [
      "prettier --write",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }

```

### 4. 添加prettier 以及 prettier

```
npm install -D prettier 
npm install -D eslint-plugin-prettier eslint-config-prettier

然后只需要在extends添加即可，这样，eslint & prettier的规则就可以同时使用了

{
  "extends": ["plugin:prettier/recommended"]
}

```


### 5. 添加eslint-plugin-react (对tsx的支持)
```
npm install -D eslint-plugin-react

"extends": [
    "plugin:react/recommended"
  ]
```


### 6. 配置打包webpack 

```
webpack5的版本，记录当前的版本号

"webpack": "^4.46.0",
"webpack-cli": "^4.9.1",
"webpack-dev-server": "3.2.1",
"webpack-merge": "^5.8.0"

"url-loader": "^1.1.2",
"file-loader": "^6.2.0",
"css-loader": "^5.2.7",
"ts-loader": "^8.3.0",
"style-loader": "^2.0.0",
"sass-loader": "^10.1.1",
"react-hot-loader": "^4.8.0",

"mini-css-extract-plugin": "^0.11.3",
"html-webpack-plugin": "^4.5.2",

webpack在4的版本下，需要将这些模块保持在当前版本下,预计升级会造成模块的构建失败及其他不可预见的问题
```

### 最后别忘了安装一些可供调用的类 & Interface 

```
"@types/jest": "^27.4.0",
"@types/koa": "^2.13.4",
"@types/koa-router": "^7.4.4",
"@types/node": "^16.11.20",
"@types/react": "^17.0.38",
"@types/react-dom": "^17.0.11",
```

> 推荐的Node版本是v14.18.3  npm v6.14.15

### 注意事项

1. 安装模块的时候如果是在打包的插件、或者在构建中使用的,使用npm install --save-dev,否则直接安装
2. 不要尝试高版本已有的模块,模块的实用性在构建的时候已经通过测试,不推荐直接升级
3. 项目内置了prettier和eslint,开发的时候必须在IDE（webstorm/vscode）中开启,具体开启的规则请查看相关文档
4. 项目小步迭代开发（推荐）,不建议一次性提过多的代码

