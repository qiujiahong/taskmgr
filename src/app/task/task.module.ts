import {NgModule} from '@angular/core';
import {TaskHomeComponent} from './task-home/task-home.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskItemComponent} from './task-item/task-item.component';
import {TaskHeaderComponent} from './task-header/task-header.component';
import {TaskRoutingModule} from './task.routing.module';
import {SharedModule} from '../shared/shared.module';
import {NewTaskComponent} from './new-task/new-task.component';
import {CopyTaskComponent} from './copy-task/copy-task.component';

@NgModule({
  declarations: [
    TaskHomeComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskHeaderComponent,
    NewTaskComponent,
    CopyTaskComponent
  ],
  imports: [
    SharedModule,
    TaskRoutingModule
  ],
  entryComponents: [
    NewTaskComponent,
    CopyTaskComponent
  ]
})
export class TaskModule {
}
