import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  @Output() public next = new EventEmitter<void>();

  timeLeft = 30;
  interval;
  dots = '';
  img = 'assets/countdown/30.xcf.png';

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        switch (this.timeLeft) {
          case 30:
            this.img = 'assets/countdown/30.xcf.png';
            break;
          case 29:
            this.img = 'assets/countdown/29.xcf.png';
            break;
          case 28:
            this.img = 'assets/countdown/28.xcf.png';
            break;
          case 27:
            this.img = 'assets/countdown/27.xcf.png';
            break;
          case 26:
            this.img = 'assets/countdown/26.xcf.png';
            break;
          case 25:
            this.img = 'assets/countdown/25.xcf.png';
            break;
          case 24:
            this.img = 'assets/countdown/24.xcf.png';
            break;
          case 23:
            this.img = 'assets/countdown/23.xcf.png';
            break;
          case 22:
            this.img = 'assets/countdown/22.xcf.png';
            break;
          case 21:
            this.img = 'assets/countdown/21.xcf.png';
            break;
          case 20:
            this.img = 'assets/countdown/20.xcf.png';
            break;
          case 19:
            break;
          case 18:
            break;
          case 17:
            break;
          case 16:
            break;
          case 15:
            break;
          case 14:
            break;
          case 13:
            break;
          case 12:
            break;
          case 11:
            break;
          case 10:
            break;
          case 9:
            break;
          case 8:
            break;
          case 7:
            break;
          case 6:
            break;
          case 5:
            break;
          case 4:
            break;
          case 3:
            break;
          case 2:
            break;
          case 1:
            break;
        }
      } else {
        // this.timeLeft = 30;
      }
    }, 1000);
  }

  constructor() {
  }

  ngOnInit(): void {
    this.startTimer();
    this.interval = setInterval(() => {
      if (this.dots === '...') {
        this.dots = '';
      } else {
        this.dots += '.';
      }
    }, 300);
  }

}
