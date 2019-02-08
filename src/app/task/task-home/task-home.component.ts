import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewTaskComponent} from '../new-task/new-task.component';
import {CopyTaskComponent} from '../copy-task/copy-task.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';

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
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
        }, {
          id: 1,
          desc: '任务2：做ppt,老板说了，做不好不准休息，所以你就自求多福吧',
          completed: false,
          priority: 2,
          owner: {
            id: 2,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
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
          completed: false,
          priority: 1,
          owner: {
            id: 3,
            name: '王五',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date(),
          reminder: new Date(),
        }, {
          id: 1,
          desc: '任务2：制定项目计划',
          completed: false,
          priority: 1,
          owner: {
            id: 2,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
      ]
    }
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskComponent,
      {data: {title: '新建任务'}});
  }

  lanchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
    // this.dialog.open(CopyTaskComponent);
  }

  launchUpdateTaskDiaglog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent,
      {data: {title: '修改任务', task: task}});
  }

  lanchConfirmDelTaskDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除任务列表', content: '您确认删除该任务列表吗?'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}
