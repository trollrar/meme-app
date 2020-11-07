import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  @Output() public next = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
