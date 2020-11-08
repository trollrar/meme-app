import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.scss']
})
export class PageFourComponent {

  @Output() public next = new EventEmitter<void>();

  counter = 0;

  public width: number;
  public height: number;

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event): void {
    const win = !!event ? (event.target as Window) : window;
    this.width = win.innerWidth;
    this.height = win.innerHeight;
  }

  constructor() {
    this.onResize();
  }

  public webcamImage: WebcamImage = null;
  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
    this.trigger.next();
  }
  handleImage(webcamImage: WebcamImage): void {
    console.log('Saved webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public startMessages(): void {
    this.counter = 1;
    setInterval(() => {
        this.counter++;
        if (this.counter === 13) {
          this.triggerSnapshot();
        }
    }, 3000);
  }
}
