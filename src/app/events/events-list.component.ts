import { Component, OnInit, ViewChild } from '@angular/core';
import { IEvent } from './Event';
import { EventsService } from './events.service';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
    selector:'event-list',
    templateUrl: 'events.component.html'
})

export class EventsListComponent implements OnInit{
    constructor(private eventServ: EventsService, private router:RouterModule){}
    private events: IEvent[];
    private errMessage: string;

    images = [0, 1, 2, 3, 4, 5, 6].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    services = ["Private Events", "Team Buildins", "Brand Activations",
    "Corporate Functions","Conferencing","Roadshows","Strategy Sessions"];

    descriptions = ['We create the perfect combination of celebration and holiday spirit nationally and internationally. Our professional team specializes in delivering high-quality event planning services to design the perfect holiday party. Whether you’re interested in a small or a large-scale event, Atlantiq Premium is committed to provide an exclusive location, themed decor, a delicious menu, and much more. We make events memorable and unique. The experienced team will help with everything from catering, decorations to entertainment, and our staff will ensure that the event is truly unforgettable. For further information on how Atlantiq Premium Events can make your event unforgettable contact us.',
  'Team building is the solution to loss of revenue caused by internal conflict, lack of communication or personal prejudice. Atlantiq Premium offers an opportunity to re-engage with renewed vigor through corporate team building events. Our team helps organizations to get their staff back on track and restore profitability. Our corporate team building event service exposes problems, resolves conflict and strengthens personal bonds through fun and creative challenges that incite people to band together to achieve common goals. And they’ll bring that mindset back to the office. ',
   'Atlantiq Premium Events has a cleverly engineered game plan for a brand launch, totally customizable to the needs with event planning designed to propel the audience’s enthusiasm into outer space. Our business pro-mote your brand or product launches with unique and exciting brand activation campaigns that capture the customers’ imaginations. Then we use our brand activation know-how to create unveiling ceremonies that build the anticipation until finally, the curtain is drawn back, and the secret revealed – watch them eat it up.',
  'Atlantiq Premium collaborate business with pleasure for a productive day away from the office. We provide everything you need to impress your colleagues and inspire your employees. We work and provide personalized menus to fit event, while our experienced team goes above and beyond to create a flawless event for you and your guests. Atlantiq Premium provide personalized and professional services for a variety of corporate functions and events, from conceptualization and brain storming to the event days and follow ups. The company promises safety guarantee and privacy during the events. Join and enjoy our carefree golf (picnic) day event services that allow you to forget the logistics and join the transferrable fun.',
  'Our conference and events help your attendees become involved, remain attentive and freely participate so you can easily communicate your brand’s value. We facilitate corporate events to connect with professionals, business people, the general public and a specific audience. Atlantiq Premium Experts create the right conditions for total involvement in corporate events, whether to educate, nurture discussion or get the information you need to better understand the market. Our business supplies the conference and events with professional staff and advise on all aspects of event planning, managing including venue utilization and maximization.',
  'Atlantiq Premium provides a show on the road that adds a whole new dimension in the market, event planning and management processes. The logistics of transporting equipment, people and sets can be complicated, so it’s important to use a roadshow services that we offer that has proved its worth. The event roadshows service has numerous benefits and unforgettable memories.',
  'Board meetings and shareholder meetings both serve important purposes. Board meetings serve as an opportunity for board members to meet to review business performance and meet with company executives to make important decisions. Atlantiq Premium provides themes that are helping to connect better with the attendees, customers, and stakeholders.'];

    paused = false;
    unpauseOnArrow = false;
    pauseOnIndicator = false;
    pauseOnHover = true;

    @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

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
    goToRSVP(){
    }


    ngOnInit(): void {
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

}