import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { SwaggerApiService } from '../../services/swagger-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  connectedUser : User | undefined;

  constructor(private _SwaggerService : SwaggerApiService) {
  }

  ngOnInit(): void {
    this._SwaggerService.$connectedUser.subscribe(user => this.connectedUser = user)
  }

  logout() : void {
    this._SwaggerService.logout()
  }
}