import { Component, Input, OnInit } from '@angular/core';
import { Month } from '../calendar.service';

@Component({
  selector: 'goat-sports-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss'],
})
export class MonthComponent implements OnInit {
  @Input() month!: Month;
  constructor() {}

  ngOnInit() {
    console.log(this.month);
  }
}
