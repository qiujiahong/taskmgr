# material icon

## 参考资料

* [MatIconModule组件](https://material.angular.io/components/icon/api)
* [material 图标](https://www.material.io/tools/icons/?style=baseline)
* [国内iconfont资源网站](https://www.iconfont.cn/)

## 使用内嵌图标

* 导入组件

```typescript
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
  ],
  imports: [
    MatIconModule
  ],
  exports: [
    MatIconModule
  ]
})
```

* 前端使用icon

```html
  <button mat-icon-button (click)="openSidebar()">
    <mat-icon>menu</mat-icon>
  </button>
```


## 使用svg资源

* 在iconfont上找到图标，使用svg下载
* 将下载好的sv图片放到src/assets/目录下 
* 前端引用icon   
```html
  <mat-icon svgIcon="account"></mat-icon>
```
* 后端注册该icon   
```typescript

//需要加入这两个组件
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export class HeaderComponent implements OnInit {
  //初始化注册该icon
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('account', sanitizer.bypassSecurityTrustResourceUrl('assets/acount.svg'));
  }
}
```

* 公共依赖中加入  HttpClientModule  
```typescript
import {HttpClientModule} from '@angular/common/http';

```


## 更好的导入svg资源

上一章中导入svg资源，不太方便，会在每一个使用到svg的组件中都导入一次，建议从核心组件中导入。

* 创建工具类svg.util.ts

```typescript
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon('account', ds.bypassSecurityTrustResourceUrl('assets/acount.svg'));
}
```

* 在核心组件中导入    

```typescript

import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@NgModule({
   ...
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CommonModule,
              ir: MatIconRegistry, ds: DomSanitizer) {
    if (parent) {
      throw  new Error('模块已经存在');
    }
    loadSvgResources(ir, ds);
  }
}

```
