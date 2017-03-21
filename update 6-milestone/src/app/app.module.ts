import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MyApp } from './home.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './services/data.service';
import { AdminHomeBodyService } from '../providers/admin-home-body.service';
import { ToastComponent } from './shared/toast/toast.component';

import { LevelAComponent } from './levelA.component';
import { LevelBComponent } from './levelB.component';
import { LevelCComponent } from './levelC.component';
import { LevelDComponent } from './levelD.component';


import { AdalService } from 'ng2-adal/core';
import { Authenticate } from '../providers/authenticate';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

const routing = RouterModule.forRoot([
  { path: 'technical', component: LevelCComponent },
  { path: 'admin', component: HomeComponent },
  { path: 'cultural', component: LevelDComponent }
]);

@NgModule({
  declarations: [
    MyApp,
    AppComponent,
    HomeComponent,
    ToastComponent,
    LevelAComponent,
    LevelBComponent,
    LevelCComponent,
    LevelDComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  entryComponents: [AppComponent, MyApp,

    HomeComponent,
    ToastComponent,
    LevelAComponent,
    LevelBComponent,
    LevelCComponent,
    LevelDComponent],

  providers: [
    DataService,
    ToastComponent, AdminHomeBodyService, Authenticate, AdalService, { provide: APP_BASE_HREF, useValue: '/' }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]


})

export class AppModule { }
