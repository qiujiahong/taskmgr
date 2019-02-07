# material Datepicker

material Datepicker用来获得日期。

```html
<mat-form-field>
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
```


* 如上所示，datepicker通常是结合input框一起使用，input里设置matDatepicker属性，mat-datepicker设置#id，关联datepicker;
* 还需要添加触发按钮mat-datepicker-toggle；
* [官方更多说明](https://material.angular.io/components/datepicker/overview)

