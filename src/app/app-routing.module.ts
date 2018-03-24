import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ControlComponentComponent } from './control-component/control-component.component';
import { CountrySelectComponentStatComponent } from './country-select-component-stat/country-select-component-stat.component';
import { TabsComponentStatisticComponent } from './tabs-component-statistic/tabs-component-statistic.component';
import { UpdateDbComponentComponent } from './update-db-component/update-db-component.component';
const appRoutes: Routes = [
  { path: 'dashboard', component:  ControlComponentComponent},
  { path: 'statistic-page', component: TabsComponentStatisticComponent },
  { path: 'update-page', component: UpdateDbComponentComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
