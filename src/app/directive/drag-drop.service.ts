import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

export interface DragData {
    tag: string;
    data: any;
}

@Injectable()
export class DragDropService {

  constructor() { }

  private _dragData = new BehaviorSubject<DragData>(null);
  setDragData(data: DragData) {
    this._dragData.next(data);
  }

  getDragData(): Observable<DragData>  {
    return this._dragData.asObservable();
  }
  clearDragData() {
    this._dragData.next(null);
  }
}
