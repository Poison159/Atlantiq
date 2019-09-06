import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
    selector: "home-app",
    template: '<event-list></event-list>',
})

export class HomeComponent implements AfterViewInit {

    constructor(private elementRef: ElementRef){}

    ngAfterViewInit(): void {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#000000';
      }

}