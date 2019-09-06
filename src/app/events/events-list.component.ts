import { IService } from './service';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { IEvent } from './Event';
import { EventsService } from './events.service';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';

@Component({
    selector:'event-list',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})

export class EventsListComponent implements OnInit{
 
    constructor(private eventServ: EventsService, private router: Router){}
    private events: IEvent[];
    private services: IService[];
    private errMessage: string;
    private serviceNames = ["Private Events","Team Buildings","Brand Actuvations","Corporate Functions","Confrencing","Roadshows", "Strategy Sessions"];

    images = [0, 1, 2, 3, 4, 5, 6].map(() => `https://picsum.photos/1920/1080?random&t=${Math.random()}`);

    paused = false;
    unpauseOnArrow = false;
    pauseOnIndicator = false;
    pauseOnHover = true;

    @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

    ngOnInit(): void {

      this.eventServ.getServices()
      .subscribe(
          (data: IService[]) => this.services = data,
          (err: any) => {
            console.log(err);
            this.errMessage = 'Server not found';
          },
          () => {
            console.log('All done getting locations');
          }
      );

      this.eventServ.getEvents()
      .subscribe(
          (data: IEvent[]) => this.events = data,
          (err: any) => {
            console.log(err);
            this.errMessage = 'Server not found';
          },
          () => {
            console.log('All done getting locations');
          }
      );
  }

    togglePaused() {
      if (this.paused) {
        this.carousel.cycle();
      } else {
        this.carousel.pause();
      }
      this.paused = !this.paused;
    }

    onSlide(slideEvent: NgbSlideEvent) {
      if (this.unpauseOnArrow && slideEvent.paused &&
        (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
        this.togglePaused();
      }
      if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
        this.togglePaused();
      }
    }

    scrollToElement($element): void {
      $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    goToRsvp(eventId){
      this.router.navigate(['/rsvp']);
    }

}