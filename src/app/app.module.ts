import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { TabsComponentStatisticComponent } from './tabs-component-statistic/tabs-component-statistic.component';
import { CountrySelectComponentStatComponent } from './country-select-component-stat/country-select-component-stat.component';
import { PlayerInfoComponentStatComponent } from './player-info-component-stat/player-info-component-stat.component';
import { CoachTabStatComponent } from './coach-tab-stat/coach-tab-stat.component';
import { CoachInfoComponentStatComponent } from './coach-info-component-stat/coach-info-component-stat.component';
import { ShareComponentComponent } from './share-component/share-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { ControlComponentComponent } from './control-component/control-component.component';
import { TableCountryComponentComponent } from './table-country-component/table-country-component.component';
import { TableLeagueComponentComponent } from './table-league-component/table-league-component.component';
import { TableTeamComponentComponent } from './table-team-component/table-team-component.component';
import { TablePlayerComponentComponent } from './table-player-component/table-player-component.component';
import { TableCoachComponentComponent } from './table-coach-component/table-coach-component.component';
import { AppRoutingModule } from './/app-routing.module';
import { SubscribeComponentComponent } from './subscribe-component/subscribe-component.component';
import { UpdateDbComponentComponent } from './update-db-component/update-db-component.component';
import { AddCountryComponentComponent } from './add-country-component/add-country-component.component';
import { AddLeagueComponentComponent } from './add-league-component/add-league-component.component';
import { AddTeamComponentComponent } from './add-team-component/add-team-component.component';
import { AddPlayerComponentComponent } from './add-player-component/add-player-component.component';
import { AddCoachComponentComponent } from './add-coach-component/add-coach-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponentStatisticComponent,
    CountrySelectComponentStatComponent,
    PlayerInfoComponentStatComponent,
    CoachTabStatComponent,
    CoachInfoComponentStatComponent,
    ShareComponentComponent,
    NavbarComponentComponent,
    ControlComponentComponent,
    TableCountryComponentComponent,
    TableLeagueComponentComponent,
    TableTeamComponentComponent,
    TablePlayerComponentComponent,
    TableCoachComponentComponent,
    SubscribeComponentComponent,
    UpdateDbComponentComponent,
    AddCountryComponentComponent,
    AddLeagueComponentComponent,
    AddTeamComponentComponent,
    AddPlayerComponentComponent,
    AddCoachComponentComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
