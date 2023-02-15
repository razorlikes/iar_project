import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MenuBarComponent} from './components/menu-bar/menu-bar.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {MatTableModule} from '@angular/material/table';
import {RecordsPageComponent} from './pages/records-page/records-page.component';
import {SalesmenPageComponent} from './pages/salesmen-page/salesmen-page.component';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {SalesmanUpdateDialogComponent} from './components/salesman-update-dialog/salesman-update-dialog.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {LayoutModule} from '@angular/cdk/layout';
import {RecordUpdateDialogComponent} from './components/record-update-dialog/record-update-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        LoginComponent,
        MenuBarComponent,
        NotFoundPageComponent,
        RecordsPageComponent,
        SalesmenPageComponent,
        SalesmanUpdateDialogComponent,
        RecordUpdateDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRouting,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatListModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDialogModule,
        MatGridListModule,
        MatMenuModule,
        LayoutModule
    ],
    providers: [{
        provide: MatDialogRef,
        useValue: {}
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
