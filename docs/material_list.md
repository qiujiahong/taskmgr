# material list

## 用途

一般用于列表，包含mat-list 和mat-nav-list，普通显示列表，和导航的列表，支持多行、带图标、带头像、密集列表和多段列表。

[官方mat-list& mat-nav-list说明](https://material.angular.io/components/list/api)

## 使用

* 导入

```typescript
import {MatListModule} from '@angular/material/list';
```

* 前端使用``mat-nav-list``或者``mat-list``  

```html
<mat-nav-list>
  <h3 mat-subheader>日历</h3>
  <mat-list-item>
    <mat-icon mat-list-icon svgIcon="month"></mat-icon>
    <span mat-line>月视图</span>
    <span mat-line mat-subheader>查看您所有的项目</span>
  </mat-list-item>
  <mat-list-item>
    <mat-icon mat-list-icon svgIcon="week"></mat-icon>
    <span mat-line>周视图</span>
    <span mat-line mat-subheader>查看您所有的项目</span>
  </mat-list-item>
  <mat-list-item>
    <mat-icon mat-list-icon [svgIcon]="today"></mat-icon>
    <span mat-line>日视图</span>
    <span mat-line mat-subheader>查看您所有的项目</span>
  </mat-list-item>

</mat-nav-list>

```



