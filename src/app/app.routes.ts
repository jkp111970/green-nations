import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { SignInComponent } from '../fw/users/sign-in/sign-in.component';
import { RegisterComponent } from '../fw/users/register/register.component';
import { AuthenticatedUsersComponent} from './authenticated-users/authenticated-users.component';
import { AuthGaurd } from './services/auth-guard.service';

export const applicationRoutes: Routes = [
    {path: 'sign-in', component : SignInComponent},
    {path: 'register', component : RegisterComponent},
    {path: 'authenticated', component : AuthenticatedUsersComponent , canActivate : [AuthGaurd],
        children: [
            { path : '', canActivateChild : [AuthGaurd], 
                children: [
                    {path: '', redirectTo: 'dashboard', pathMatch:'full'},
                    {path: 'dashboard', component : DashboardComponent},
                    {path: 'country-list/:count', component : CountryListComponent},
                    {path: 'country-detail/:country', component : CountryDetailComponent},
                    {path: 'country-maint', component : CountryMaintComponent},
                    {path: 'settings', component : SettingsComponent}
                ]
            }
        ]
    },
    {path: '', component : SignInComponent},
    {path:'**', component : SignInComponent}
];