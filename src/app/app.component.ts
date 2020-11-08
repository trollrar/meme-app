import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public page = 1;

  public next(): void {
    this.page++;
  }

  public resett(): void {
    this.page = 1;

  }
}
