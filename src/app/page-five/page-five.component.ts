import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-five',
  templateUrl: './page-five.component.html',
  styleUrls: ['./page-five.component.scss']
})
export class PageFiveComponent implements OnInit {

  @Output() public next = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
