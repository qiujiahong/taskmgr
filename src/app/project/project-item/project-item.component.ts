import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Output() invite = new EventEmitter<void>();
  @Input() item ;

  constructor() { }

  ngOnInit() {
  }
  onInvitClick() {
    this.invite.emit();
    console.log('send invite');
  }
}
