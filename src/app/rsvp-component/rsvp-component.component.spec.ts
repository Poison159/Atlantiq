import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpComponentComponent } from './rsvp-component.component';

describe('RsvpComponentComponent', () => {
  let component: RsvpComponentComponent;
  let fixture: ComponentFixture<RsvpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
