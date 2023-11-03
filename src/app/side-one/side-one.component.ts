import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-side-one',
  templateUrl: './side-one.component.html',
  styleUrls: ['./side-one.component.css']
})
export class SideOneComponent implements OnInit {
  messageUserT: string = ''
  data: Array<any> = [];
  userId = '1';
  constructor(
    private service: ServiceService
  ) { }
  ngOnInit(): void {
    this.service.message.subscribe((req) => {
      if (req) {
        if (Array.isArray(req)) {
          this.data.push(...req);
          localStorage.setItem('chat', JSON.stringify(this.data));
        }
        else {
          this.data.push(req);
          localStorage.setItem('chat', JSON.stringify(this.data));
        }
      }
    })
  }
  send() {
    this.service.message.next(
      {
        "userId": this.userId, "message": this.messageUserT,
        image: 'https://prastishstag.wpengine.com/wp-content/uploads/2019/11/paramjit.jpg'
      }

    )
    this.messageUserT = ''
  }
}
