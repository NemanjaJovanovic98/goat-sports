import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';
import { MonthComponent } from './month/month.component';
import { DayInfoComponent } from './day-info/day-info.component';
import { DayComponent } from './day/day.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    FlexLayoutModule,
  ],
  declarations: [CalendarPage, MonthComponent, DayInfoComponent, DayComponent],
})
export class CalendarPageModule {}
