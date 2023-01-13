import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ActionEvent } from './product.state';

@Injectable({
  providedIn: 'root'
})
export class EventDriverService {

  public sourceSubject=new Subject<ActionEvent>();
  public sourceSubjectObservable=this.sourceSubject.asObservable();
  constructor() { }

  publishEvent($event:ActionEvent)
  {
    this.sourceSubject.next($event)
  }
}
