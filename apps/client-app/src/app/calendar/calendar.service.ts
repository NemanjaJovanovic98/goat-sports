import { Injectable, OnInit } from '@angular/core';

export interface Day {
  uid: string;
  date: Date;
  workout: boolean;
  reflection: boolean;
  isInCurrentMonth: boolean;
}

export interface Month {
  monthName: string;
  days: Day[];
}

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  day = new Date();
  month!: Month;
  monthData: Day[] = [
    {
      workout: true,
      reflection: true,
      uid: 'day1',
      date: new Date(2022, 6, 1),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day2',
      date: new Date(2022, 6, 2),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day3',
      date: new Date(2022, 6, 3),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day4',
      date: new Date(2022, 6, 4),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day5',
      date: new Date(2022, 6, 5),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day6',
      date: new Date(2022, 6, 6),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day7',
      date: new Date(2022, 6, 7),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day8',
      date: new Date(2022, 6, 8),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day9',
      date: new Date(2022, 6, 9),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day10',
      date: new Date(2022, 6, 10),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day11',
      date: new Date(2022, 6, 11),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day12',
      date: new Date(2022, 6, 12),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day13',
      date: new Date(2022, 6, 13),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day14',
      date: new Date(2022, 6, 14),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day15',
      date: new Date(2022, 6, 15),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day16',
      date: new Date(2022, 6, 16),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day17',
      date: new Date(2022, 6, 17),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day18',
      date: new Date(2022, 6, 18),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day19',
      date: new Date(2022, 6, 19),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day20',
      date: new Date(2022, 6, 20),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day21',
      date: new Date(2022, 6, 21),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day22',
      date: new Date(2022, 6, 22),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day23',
      date: new Date(2022, 6, 23),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day24',
      date: new Date(2022, 6, 24),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day25',
      date: new Date(2022, 6, 25),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day26',
      date: new Date(2022, 6, 26),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day27',
      date: new Date(2022, 6, 27),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day28',
      date: new Date(2022, 6, 28),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day29',
      date: new Date(2022, 6, 29),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day30',
      date: new Date(2022, 6, 30),
      isInCurrentMonth: true,
    },
    {
      workout: true,
      reflection: true,
      uid: 'day31',
      date: new Date(2022, 6, 31),
      isInCurrentMonth: true,
    },
  ];

  constructor() {}

  loadMonthData(): void {
    this.month = {
      days: this.monthData,
      monthName: 'september',
    };
    // console.log(this.month);
    this.addPreviousMonthDays();
    this.addNextMonthdays();
  }

  addPreviousMonthDays() {
    let newDays: Day[] = [];
    for (let index = 0; index < this.month.days[0].date.getDay() - 1; index++) {
      newDays = [
        {
          date: new Date(
            this.month.days[0].date.getFullYear(),
            this.month.days[0].date.getMonth(),
            0 - index
          ),
          reflection: false,
          workout: false,
          uid: 'sfsdfsd',
          isInCurrentMonth: false,
        },
        ...newDays,
      ];
    }
    this.month.days = [...newDays, ...this.month.days];
  }

  addNextMonthdays() {
    let newDays: Day[] = [];
    for (let index = this.month.days.length; index < 42; index++) {
      newDays = [
        ...newDays,
        {
          date: new Date(
            this.month.days[0].date.getFullYear(),
            this.month.days[0].date.getMonth() + 1,
            index - 34
          ),
          reflection: false,
          workout: false,
          uid: 'sfsdfsd',
          isInCurrentMonth: false,
        },
      ];
    }
    this.month.days = [...this.month.days, ...newDays];
  }
}
