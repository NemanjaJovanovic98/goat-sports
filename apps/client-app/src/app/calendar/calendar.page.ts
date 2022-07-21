import { Component, OnInit } from '@angular/core';
import { CalendarService, Day, Month } from './calendar.service';

@Component({
  selector: 'goat-sports-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  month!: Month;
  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.calendarService.loadMonthData();
    this.month = this.calendarService.month;
  }
}
