1、npm install <包名>  参数含义
无参数 安装包 并且加入dependencies依赖
--save参数 同无参数
--save-dev参数 安装包 并且加入 devDependencies 依赖(安装时不会自动安装)

2、npm install 初始化
无参数 所有依赖都安装 包含 dependencies 和 devDependencies
--production 只安装 dependencies,可简写 --prod
--only=dev  只装 devDependencies
