# huahua
open huahua 

1、创建vite项目 `npm create vite@latest`

`npm run dev`

2、学习路由 `npm install vue-router@4`

单页面需要指定支付路由(类比全局拦截)
想使用 @路径 `npm i path`
配置文件中指定

```
import { path } from "path";
....
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
```