import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyEventsComponent } from './my-events/my-events.component';
import { EventsIncomingComponent } from './events-incoming/events-incoming.component';
import { SharedModule } from '../shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';



@NgModule({
  declarations: [
    MyEventsComponent,
    EventsIncomingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
