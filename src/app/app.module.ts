import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './component/start/start.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContectComponent } from './component/contect/contect.component';
import { ClassesComponent } from './component/classes/classes.component';
import { SheduleComponent } from './component/shedule/shedule.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HomeComponent,
    AboutComponent,
    ContectComponent,
    ClassesComponent,
    SheduleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
