import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):any{
    let isAuth = this.authService.isAuthenticated();
    if (!isAuth) {
      this.router.navigate(['/']);
    } else {
      return isAuth
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.canActivate(route, state);
  }
}
