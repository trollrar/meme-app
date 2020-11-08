import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-five',
  templateUrl: './page-five.component.html',
  styleUrls: ['./page-five.component.scss']
})
export class PageFiveComponent implements OnInit {

  @Output() public resett = new EventEmitter<void>();

  add = true;
  counter = 7;
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.counter--;
    }, 1000);
  }
}
