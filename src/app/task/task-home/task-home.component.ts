import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务1：买咖啡',
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          duDate: new Date(),
        }, {
          id: 1,
          desc: '任务2：做ppt',
          owner: {
            id: 2,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          duDate: new Date(),
        },
      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务3：代码评审',
          owner: {
            id: 3,
            name: '王五',
            avatar: 'avatars:svg-13'
          },
          duDate: new Date(),
        }, {
          id: 1,
          desc: '任务2：制定项目计划',
          owner: {
            id: 2,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          duDate: new Date(),
        },
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
