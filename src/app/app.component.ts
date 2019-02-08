import { Component } from '@angular/core';
import {trigger, state, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('square',
      [
        state('green', style ({'background-color': 'green'})),
        state('red', style ({'background-color': 'red'})),
        transition('green => red', animate('0.2s 1s')), // 动画执行时间0.2s，延迟1s执行
        transition('red => green', animate(1000))

      ]
    )
  ]
})
export class AppComponent {
  squareState = 'red';
  darkTheme = false;

  switchTheme(dark: boolean) {
    this.darkTheme = dark;
    console.log( dark);
    console.log(this.darkTheme);
  }

  onClick() {
    this.squareState = this.squareState === 'red' ? 'green' : 'red';
  }
}
