import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user : string | undefined;
  private _token : string | null = null;

  setUser(user : string) {
    this._user = user;
  }

  getUser() : string | undefined{
    return this._user;
  }

  getToken(token : string) : void {
    this._token = token;
  }

  aliveToken() : string | null {
    return this._token;
  }

  deleteToken() : void {
    this._token = null;
  }
}
