import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path : "", component : HomeComponent },
  { path : "home", redirectTo : "/" },
  { path : "events", component : EventsComponent, loadChildren : () => import("./events/events.module").then(m => m.EventsModule) },
  { path : "register", component : RegisterComponent, loadChildren : () => import("./register/register.module").then(m => m.RegisterModule) },
  { path : "login", component : LoginComponent, loadChildren : () => import("./login/login.module").then(m => m.LoginModule) },
  { path : "notfound", component : NotfoundComponent},
  { path : "**", redirectTo : "/notfound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
