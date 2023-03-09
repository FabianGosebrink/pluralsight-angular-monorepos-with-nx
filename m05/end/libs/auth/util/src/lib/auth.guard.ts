import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { map, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private oidcSecurityService: OidcSecurityService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.handleAuth();
  }

  canLoad(route: Route, segments: UrlSegment[]) {
    return this.handleAuth();
  }

  private handleAuth() {
    return this.oidcSecurityService.isAuthenticated$.pipe(
      take(1),
      map(({ isAuthenticated }) => {
        alert(isAuthenticated);
        if (!isAuthenticated) {
          this.router.navigate(['']);
          return false;
        }
        return true;
      })
    );
  }
}
