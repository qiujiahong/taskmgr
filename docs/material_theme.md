# material主题

angular主题给我们提供了：  
* angular 官方为我们提供了[调色板](https://www.materialpalette.com)，我们可以直接选择对应的颜色，然后就会生成响应的主题。
* 明暗,同样的颜色，白天晚上显示的色调不一样。  
* 叠加  


## 自定义主题

* styles.scss 中引入自定义主题文件

```scss
//@import "~@angular/material/prebuilt-themes/indigo-pink.css";
//@import "~@angular/material/prebuilt-themes/deeppurple-amber.css";
@import "./theme";  

```

* 新建主题文件theme.scss 

```scss
// 加入material 主题支持
@import '../node_modules/@angular/material/theming';

@include mat-core();

// 定义主题色
$my-app-primary: mat-palette($mat-indigo);
// axxx代表颜色深浅 第一个是默认颜色，第二个在亮的主题，第三个在暗的主题的颜色
$my-app-accent:  mat-palette($mat-pink,A200,A100,A400);
$my-app-warn: mat-palette($mat-red);
// 定义主题
$my-app-theme: mat-light-theme($my-app-primary,$my-app-accent,$my-app-warn);
// 引入使用主题
@include angular-material-theme($my-app-theme);

```


