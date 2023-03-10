import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { select, Store } from '@ngrx/store';
import {
  AuthActions,
  selectCurrentUserIdentifier,
  selectIsLoggedIn,
} from '@ps-doggo-rating/shared/util-auth';
import { environment } from '@ps-doggo-rating/shared/util-environments';
import {
  FooterComponent,
  NavigationComponent,
} from '@ps-doggo-rating/shared/ui-common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports: [FooterComponent, NavigationComponent, RouterModule, AsyncPipe],
})
export class LayoutComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  myDoggoCount$: Observable<number>;
  userEmail$: Observable<string>;
  realTimeConnection$: Observable<string>;

  backendUrl = environment.server;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(selectIsLoggedIn));
    //this.myDoggoCount$ = this.store.pipe(select(getMyDoggosCount));
    this.userEmail$ = this.store.pipe(select(selectCurrentUserIdentifier));
    //this.realTimeConnection$ = this.store.pipe(select(getRealTimeConnection));
  }

  login() {
    this.store.dispatch(AuthActions.login());
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
