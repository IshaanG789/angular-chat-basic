import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 data:Array<any> =  JSON.parse(localStorage.getItem('chat') as any);
 
  message=new BehaviorSubject<any>(this.data);

  constructor() { }
}
