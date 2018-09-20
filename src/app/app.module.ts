import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HttpModule} from '@angular/http';
import { AdminModule } from './admin/admin.module';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HttpModule,
    AdminModule,
    RouterModule,
    AppRoutingModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
