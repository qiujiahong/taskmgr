import { Component, OnInit } from '@angular/core';
import { getDate } from 'date-fns';
// yarn add date-fns
// yarn add @types/date-fns

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  today = 'day';

  constructor() {
    this.today = `day${getDate(new Date())}`;

  }

  ngOnInit() {
    // this.today = `day${getDate(new Date())}`;
    // console.log('day:' + this.today);
  }

}
