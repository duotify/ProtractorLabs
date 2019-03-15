import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../../user/auth.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivator implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.auth.checkAuthenticationStatus()
      .pipe(
        catchError(err => {
          this.router.navigate(['/user/login']);
          return of(false);
        }),
        map(val => {
          if (!val) {
            this.router.navigate(['/user/login']);
          }
          return !!val;
        })
      );
  }
}
