import { HttpClientModule } from '@angular/common/http';
import { EventsListComponent } from './events/events-list.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsService } from './events/events.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RsvpComponentComponent } from './rsvp-component/rsvp-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsListComponent,
    RsvpComponentComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
