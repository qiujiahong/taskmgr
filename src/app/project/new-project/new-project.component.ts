import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';



@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,    // 接收父亲传送过来的消息。
              private dialogRef: MatDialogRef<NewProjectComponent>) { }

  ngOnInit() {
    console.log(JSON.stringify(this.data));
  }

  onClick() {// 发送消息给父亲
    this.dialogRef.close('save and close');
  }
}
