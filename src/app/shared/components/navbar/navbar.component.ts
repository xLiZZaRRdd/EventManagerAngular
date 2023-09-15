import { Component } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  connectedUser : User | undefined;

  constructor(private _authService : AuthService) {
  }

  displayUser() : string | undefined{
    return this._authService.getUser()
  }

  logout() : void {
    this._authService.deleteToken()
    localStorage.clear()
  }
}
