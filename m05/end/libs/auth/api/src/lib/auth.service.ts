import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private modal: Window;

  constructor(private oidcSecurityService: OidcSecurityService) {}

  login() {
    this.oidcSecurityService.authorize();
  }

  checkAuth(url?: string) {
    if (this.modal) {
      this.modal.close();
    }

    return this.oidcSecurityService.checkAuth(url);
  }

  logout() {
    return this.oidcSecurityService.logoff();
  }
}
