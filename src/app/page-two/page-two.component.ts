import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  @Output() public next = new EventEmitter<void>();

  timeLeft = 45;
  interval;
  dots = '';
  img = 'assets/countdown/30.xcf.png';

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        switch (this.timeLeft) {
          case 45:
            this.img = 'assets/countdown/30.xcf.png';
            break;
          case 44:
            this.img = 'assets/countdown/29.xcf.png';
            break;
          case 43:
            this.img = 'assets/countdown/28.xcf.png';
            break;
          case 42:
            this.img = 'assets/countdown/27.xcf.png';
            break;
          case 41:
            this.img = 'assets/countdown/26.xcf.png';
            break;
          case 40:
            this.img = 'assets/countdown/25.xcf.png';
            break;
          case 39:
            this.img = 'assets/countdown/24.xcf.png';
            break;
          case 38:
            this.img = 'assets/countdown/23.xcf.png';
            break;
          case 37:
            this.img = 'assets/countdown/22.xcf.png';
            break;
          case 36:
            this.img = 'assets/countdown/21.xcf.png';
            break;
          case 35:
            this.img = 'assets/countdown/20.xcf.png';
            break;
          case 34:
            this.img = 'assets/countdown/19.png';
            break;
          case 33:
            this.img = 'assets/countdown/18.png';
            break;
          case 32:
            this.img = 'assets/countdown/17.png';
            break;
          case 31:
            this.img = 'assets/countdown/16.png';
            break;
          case 30:
            this.img = 'assets/countdown/15.png';
            break;
          case 29:
            this.img = 'assets/countdown/14.png';
            break;
          case 28:
            this.img = 'assets/countdown/13.png';
            break;
          case 27:
            this.img = 'assets/countdown/12.png';
            break;
          case 26:
            this.img = 'assets/countdown/11.png';
            break;
          case 25:
            this.img = 'assets/countdown/10.png';
            break;
          case 24:
          case 23:
            this.img = 'assets/countdown/9.png';
            break;
          case 22:
          case 21:
            this.img = 'assets/countdown/8.png';
            break;
          case 20:
          case 19:
          case 18:
            this.img = 'assets/countdown/7.png';
            break;
          case 17:
          case 16:
          case 15:
            this.img = 'assets/countdown/6.png';
            break;
          case 14:
          case 13:
            this.img = 'assets/countdown/5.png';
            break;
          case 12:
          case 11:
          case 10:
            this.img = 'assets/countdown/4.png';
            break;
          case 9:
          case 8:
            this.img = 'assets/countdown/3.png';
            break;
          case 7:
          case 6:
            this.img = 'assets/countdown/2.png';
            break;
          case 5:
          case 4:
          case 3:
            this.img = 'assets/countdown/1.png';
            break;
          case 2:
          case 1:
            this.img = 'assets/countdown/0.jpg';
            break;
        }
      } else {
        this.next.emit();
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
