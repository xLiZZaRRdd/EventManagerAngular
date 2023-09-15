import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyEventsComponent } from './my-events/my-events.component';
import { EventsIncomingComponent } from './events-incoming/events-incoming.component';
import { connectedGuard } from '../shared/guards/connected.guard';

const routes: Routes = [
  { path : "events-incoming" , component : EventsIncomingComponent },
  { path : "my-events" ,  canActivate : [connectedGuard], component : MyEventsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {}
