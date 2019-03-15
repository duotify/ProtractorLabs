import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) {}

  loginUser(userName: string, password: string) {

    const loginInfo = { username: userName, password: password };
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    return this.http.post(`${environment.host}/api/login`, loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <IUser>data;
      }))
      .pipe(catchError(err => {
        console.log(err);
        return of(false);
      }));
  }

  newUser(userName: string, password: string, firstName: string, lastName: string) {

    const newUser = { username: userName, password: password, firstName: firstName, lastname: lastName };
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    return this.http.post(`${environment.host}/api/login/new`, newUser, options)
      .pipe(catchError(err => {
        console.log(err);
        return of(false);
      }));
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    return this.http.get(`${environment.host}/api/login/currentIdentity`)
    .pipe(tap(data => {
      if (data instanceof Object) {
        this.currentUser = <IUser>data;
      }
    }));
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    return this.http.put(`${environment.host}/api/login/users/${this.currentUser.id}`, this.currentUser, options);
  }

  logout() {
    this.currentUser = undefined;

    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.post(`${environment.host}/api/login/logout`, {}, options);
  }
}
