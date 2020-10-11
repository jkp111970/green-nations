import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { applicationRoutes } from './app.routes';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { AuthenticatedUsersComponent } from './authenticated-users/authenticated-users.component';
import { UserServiceApi } from './services/UserServiceApi';
import { UserApi } from '../fw/services/UserApi';
import { AuthGaurd } from './services/auth-guard.service';
import { CountryService } from './services/country-service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintComponent,
    AuthenticatedUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(applicationRoutes),
    FwModule
  ],
  providers: [
    UserServiceApi,
    AuthGaurd,
    {provide: UserApi, useExisting: UserServiceApi},
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
