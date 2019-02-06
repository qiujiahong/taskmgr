# material menu

菜单由两部分构成，菜单触发者和菜单,如下,appMenu是链接菜单触发者和菜单的引用名：  

```html
<!-- 菜单 -->
<mat-menu #appMenu="matMenu">
  <button mat-menu-item>Settings</button>
  <button mat-menu-item>Help</button>
</mat-menu>

<!-- 菜单触发者 -->
<button mat-icon-button [matMenuTriggerFor]="appMenu">
  <mat-icon>more_vert</mat-icon>
</button>
```


  
