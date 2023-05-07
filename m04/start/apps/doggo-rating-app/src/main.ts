import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthInterceptor, AuthModule } from 'angular-auth-oidc-client';
import { ToastrModule } from 'ngx-toastr';
import { APP_ROUTES } from './app/app-routes';
import { AppComponent } from './app/app.component';
import { AuthEffects } from './app/auth/store/auth.effects';
import { authReducer } from './app/auth/store/auth.reducer';
import { environment } from './environments/environment';

const webCallbackUrl = `${window.location.origin}/callback`;

console.log('Running with endpoint', environment.server);

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideRouter(APP_ROUTES),
    provideHttpClient(),
    importProvidersFrom(
      StoreModule.forRoot({
        router: routerReducer,
        auth: authReducer,
      }),
      EffectsModule.forRoot([AuthEffects]),
      StoreRouterConnectingModule.forRoot(),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
      }),
      AuthModule.forRoot({
        config: {
          authority: 'https://dev-2fwvrhka.us.auth0.com',
          redirectUrl: webCallbackUrl,
          clientId: 'W6a2DDLMzlWPF6vZ5AKKNnFVonklSU0m',
          scope: 'openid profile email offline_access access:api',
          responseType: 'code',
          silentRenew: true,
          useRefreshToken: true,
          postLogoutRedirectUri: window.location.origin,
          customParamsAuthRequest: {
            audience: environment.server,
          },
          secureRoutes: [environment.server],
        },
      }),
      ToastrModule.forRoot({
        positionClass: 'toast-bottom-right',
      }),
      BrowserAnimationsModule
    ),
  ],
});
