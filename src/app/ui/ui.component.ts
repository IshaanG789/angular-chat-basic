import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
  messageUserT: string = ''
  data: Array<any> = [];
  userId = 2;
  constructor(
    private service: ServiceService
  ) {
  }

  ngOnInit(): void {
    this.service.message.subscribe((req: any) => {
      if (req) {
        if (Array.isArray(req)) {
          this.data.push(...req);
        }
        else {
          this.data.push(req);
        }
      }
    })
  }

  send() {
    this.service.message.next(
      {
        "userId": this.userId, "message": this.messageUserT,
        image: 'https://prastishstag.wpengine.com/wp-content/uploads/2019/11/krishan.jpg'
      }

    )
    this.messageUserT = ''

  }

}
