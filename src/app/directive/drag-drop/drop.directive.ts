import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import {DragDropService} from '../drag-drop.service';
import {take} from 'rxjs/operators';

@Directive({
  selector: '[appDroppable]'
})
export class DropDirective {


  @Input() dragEnterClass: string;
  @Input() dropTags: string[] = [];
  private data$;

  constructor(private el: ElementRef ,
              private rd: Renderer2,
              private service: DragDropService) {
    // this.data$ = this.service.getDragData().take(1);
    this.service.getDragData().pipe(take(1))
      .subscribe(d => this.data$ = d );
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event) {
    if (this.el.nativeElement === ev.target) {//  此时认为是该元素发起的拖拽
      this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {
    if (this.el.nativeElement === ev.target) {//  此时认为是该元素发起的拖拽
      // this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    // console.log('1.leave....');
    if (this.el.nativeElement === ev.target) {//  此时认为是该元素发起的拖拽
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    if (this.el.nativeElement === ev.target) {//  此时认为是该元素发起的拖拽
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

}
