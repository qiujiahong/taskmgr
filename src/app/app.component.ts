import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  squareState = 'red';
  darkTheme = false;

  switchTheme(dark: boolean) {
    this.darkTheme = dark;
    console.log( dark);
    console.log(this.darkTheme);
  }

}
