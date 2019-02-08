# angular动画


![](./assets/2019-02-08-12-26-24.png)



* Animate函数规定了具体怎么样过渡，比如时间、过渡的速度等，animate有多种重载方式。

* 在动画中，state定义状态。 [transition](https://angular.io/api/animations/transition#transition)定义了状态之间的过渡方法。


## 使用 

* 安装动画组件 

```
yarn add  @angular/animations@7.2.4
```

* 引入 组件app.module.ts

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
```

* 引入函数app.component.ts,定义trigger、state、transition和对应的animate

```typescript
import { trigger, state, transition, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('square',
      [
        state('green', style ({'background-color': 'green'})),
        state('red', style ({'background-color': 'red'})),
        transition('green => red', animate(1000)),
        transition('red => green', animate(1000))
      ]
    )
  ]
})
export class AppComponent {
  squareState = 'red';    //定义开始状态为red
  onClick() {
    this.squareState = this.squareState === 'red' ? 'green' : 'red';
  }
}
```

* 前端代码app.component.html,使用@square绑定trigger，squareState为变量名。

```html
 <div class="square" [@square]="squareState" (click)="onClick()">
```



## 动画效果

* 常用的动画效果有，匀速变化、cubic-bezier、和关键帧（keyframe）
* cubic-bezier 有如下2个网站能够帮我们实现，如``animate('0.8s cubic-bezier(0.445, 0.05, 0.55, 0.95)')``
  * https://easings.net/zh-cn  常用渐变
  * http://cubic-bezier.com/
* 关键帧（keyframe）定义动画路径上的关键帧语法如下：

```typescript
animate(5s, keyframes([
  style({transform: 'translateY(100%)'}),
  style({transform: 'translateY(90%)'}),
  style({transform: 'translateY(80%)'}),
  style({transform: 'translateY(20%)'}),
  style({transform: 'translateY(0%)'}),
]))
```

## group动画

group动画是指同时进行一组元素的动画。


## Query & Stagger 

* Query用于父亲节点寻找子节点，然后把动画应用到选择的元素；
* Stagger指有多个满足Querry的元素，每个元素之间有间隔。

