import { NgModule } from '@angular/core';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { InviteComponent } from './invite/invite.component';
import {ProjectRoutingModule} from './project-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ConfirmDialogComponent} from '../shared/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectItemComponent,
    NewProjectComponent,
    InviteComponent
  ],
  imports: [
    ProjectRoutingModule,
    SharedModule
  ],
  entryComponents: [
    NewProjectComponent,
    InviteComponent,
    ConfirmDialogComponent
  ]
})
export class ProjectModule { }
