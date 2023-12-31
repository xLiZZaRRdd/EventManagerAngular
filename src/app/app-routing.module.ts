import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

const routes: Routes = [
  { path : "", component : HomeComponent },
  { path : "home", redirectTo : "/" },
  { path : "events", loadChildren : () => import("./events/events.module").then(m => m.EventsModule) },
  { path : "account", loadChildren : () => import("./account/account.module").then(m => m.AccountModule) },
  { path : "notfound", component : NotfoundComponent},
  { path : "**", redirectTo : "/notfound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
