import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {DragDropService} from '../drag-drop.service';

// 拖动

@Directive({
  selector: '[appDraggable][draggedClass]'
})
export class DragDirective {

  private _isDraggable = false ;

  @Input('appDraggable')
  set isDraggable(val: boolean) {
    this._isDraggable = val;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`);
  }
  get isDraggable() {
    return this._isDraggable;
  }

  @Input() draggedClass: string;
  @Input() dragTag: string;
  @Input() dragData: any;

  constructor(private el: ElementRef ,
              private rd: Renderer2,
              private service: DragDropService) { }

  @HostListener('dragstart', ['$event'])
  onDragStart(ev: Event) {
    if (this.el.nativeElement === ev.target) {//  此时认为是该元素发起的拖拽
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
      this.service.setDragData({tag: this.dragTag, data: this.dragData});
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event) {
    if (this.el.nativeElement === ev.target) {//  此时认为是该元素发起的拖拽
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }
}
