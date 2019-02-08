import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() invite = new EventEmitter<void>();
  @Output() editProject = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onInvitClick() {
    this.invite.emit();
    console.log('send invite');
  }

  onEditClick(item) {
    this.editProject.emit();
  }
}
