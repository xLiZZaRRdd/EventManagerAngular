import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsIncomingComponent } from './events-incoming.component';

describe('EventsIncomingComponent', () => {
  let component: EventsIncomingComponent;
  let fixture: ComponentFixture<EventsIncomingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsIncomingComponent]
    });
    fixture = TestBed.createComponent(EventsIncomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
