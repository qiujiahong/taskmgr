# date

本文说明如何在angular项目中使用date


## 使用方法

* 安装依赖

```bash
yarn add date-fns
yarn add @types/date-fns
```

* 使用 

```typescript
import { Component, OnInit } from '@angular/core';
import { getDate } from 'date-fns';

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
  }

}
```
