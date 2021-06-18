import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message:String

  constructor() { 
    this.message = ""
  }

  ngOnInit(): void {
  }

  onShowClick(){
    this.message = "Hello World!"
  }

}
