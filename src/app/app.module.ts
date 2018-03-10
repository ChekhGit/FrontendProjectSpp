import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TabsComponentStatisticComponent } from './tabs-component-statistic/tabs-component-statistic.component';
import { CountrySelectComponentStatComponent } from './country-select-component-stat/country-select-component-stat.component';
import { PlayerInfoComponentStatComponent } from './player-info-component-stat/player-info-component-stat.component';
import { CoachTabStatComponent } from './coach-tab-stat/coach-tab-stat.component';
import { CoachInfoComponentStatComponent } from './coach-info-component-stat/coach-info-component-stat.component';
import { ShareComponentComponent } from './share-component/share-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponentStatisticComponent,
    CountrySelectComponentStatComponent,
    PlayerInfoComponentStatComponent,
    CoachTabStatComponent,
    CoachInfoComponentStatComponent,
    ShareComponentComponent

  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
