# 常用命令

* npm i --save 包名   --  软件依赖
* npm i --save -dev   --   添加开发依赖
* ng new 项目名    -- 新建一个项目
* ng new taskmgr --skip-install     -- 创建项目跳过安装
* ng new taskmgr -si --style=scss   -- 创建项目跳过安装
* ng build -prod  --  生产环境编译
* ng serve  -- 启动开发服务器
* ng g m core  -- 创建一个名字叫core的模块。
* ng g c header -- 创建一个header的组件
* ng g c core/header -- 在core下面创建要给header的组件
* ng g c core/header --spec=false -- 在core下面创建要给header的组件,不使用测试
* ng g c shared/confirm-dialog -it -is  -- 创建组件，并且使用内联模版



## 配置

* ng config -g cli.packageManager yarn  -- 配置使用yarn 作为默认的包管理器
* ng config -g cli.packageManager cnpm   -- 配置使用cnpm 作为默认的包管理器
* ng config -g cli.packageManager npm   -- 配置使用cnpm 作为默认的包管理器


