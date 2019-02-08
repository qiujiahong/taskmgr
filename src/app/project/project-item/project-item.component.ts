import {Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { cardAnim } from '../../anims/card.anim';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnim
  ]
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() invite = new EventEmitter<void>();
  @Output() editProject = new EventEmitter();
  @Output() delProject = new EventEmitter();
  @HostBinding('@card')  cardState = 'out';

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(target) {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
  }

  onInvitClick() {
    this.invite.emit();
    console.log('send invite');
  }

  onEditClick(item) {
    this.editProject.emit();
  }

  onDelClick() {
    this.delProject.emit();
  }
}
