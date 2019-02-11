import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDirective } from './drag-drop/drag.directive';
import { DropDirective } from './drag-drop/drop.directive';
import {DragDropService} from './drag-drop.service';

@NgModule({
  declarations: [DragDirective, DropDirective],
  imports: [
    CommonModule
  ],
  exports: [
    DragDirective,
    DropDirective
  ],
  providers: [
    DragDropService
  ]
})
export class DirectiveModule { }
