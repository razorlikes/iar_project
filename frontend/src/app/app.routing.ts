import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {AuthGuardService} from './services/auth-guard.service';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {SalesmenPageComponent} from './pages/salesmen-page/salesmen-page.component';
import {RecordsPageComponent} from './pages/records-page/records-page.component';
import {MyRecordsPageComponent} from './pages/my-records-page/my-records-page.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';

/*
  This array holds the relation of paths and components which angular router should resolve.

  If you want add a new page with a separate path/subdirectory you should register it here.
  It is also possible to read parameters from the path they have to be specified with ':' in the path.

  If a new page should also show up in the menu bar, you need to add it there too.
  Look at: frontend/src/app/components/menu-bar/menu-bar.component.ts
 */
const routes: Routes = [
    {path: 'login', component: LoginPageComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuardService]},
    {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuardService]},
    {path: 'salesmen', component: SalesmenPageComponent, canActivate: [AuthGuardService]},
    {path: 'records', component: RecordsPageComponent, canActivate: [AuthGuardService]},
    {path: 'myrecords', component: MyRecordsPageComponent, canActivate: [AuthGuardService]},
    {path: '**', component: NotFoundPageComponent} // these entries are matched from top to bottom => not found should be the last entry
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting { }
