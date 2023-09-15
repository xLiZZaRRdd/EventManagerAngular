import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { UserToken } from '../models/userToken';


@Injectable({
  providedIn: 'root'
})
export class SwaggerApiService {

  private _connectedUser : User | undefined = undefined;
  private _$connectedUser : BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(this._connectedUser);
  $connectedUser : Observable<User | undefined> = this._$connectedUser.asObservable()

  url : string = 'https://localhost:7245/api/'
  urlLogin : string = 'https://localhost:7245/api/Auth/Login'
  urlRegister : string = 'https://localhost:7245/api/Auth/Register'

  constructor(private _httpClient : HttpClient) {}

  register(dataForm : any) : Observable<any> {
    return this._httpClient.post(this.urlRegister, dataForm)
  }

  login(dataForm : any) : Observable<UserToken> {
    return this._httpClient.post<UserToken>(this.urlLogin, dataForm)
        .pipe(map(userToken => {
          this._$connectedUser.next(userToken.member)
          console.log("pouet", userToken); return userToken}
    ))
  }

  logout() : void {
    this._$connectedUser.next(undefined)
    localStorage.clear()
  }

  getById() : void {
    let id = localStorage.getItem('userId')
    if(id){
      this._httpClient.get<User>('https://localhost:7245/api/Member/'+id).subscribe(user => { 
        this._$connectedUser.next(user);

      })
    }
  }

  update(id : number, user : User) : Observable<User> {
    return this._httpClient.put<User>(this.url+id, user);
  }

  delete(id : number) : Observable<User> {
    return this._httpClient.delete<User>(this.url+id);
  }
}