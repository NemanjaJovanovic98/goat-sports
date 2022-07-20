import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('../calendar/calendar.module').then(
            (m) => m.CalendarPageModule
          ),
      },
      {
        path: 'chart',
        loadChildren: () =>
          import('../chart/chart.module').then((m) => m.ChartPageModule),
      },
      {
        path: 'groups',
        loadChildren: () =>
          import('../groups/groups.module').then((m) => m.GroupsPageModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
