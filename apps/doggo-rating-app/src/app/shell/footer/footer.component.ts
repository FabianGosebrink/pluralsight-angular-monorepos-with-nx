import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { selectCurrentUserIdentifier } from './../../auth/store/auth.selectors';
import { getRealTimeConnection } from './../../doggos/store/doggos.selectors';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrls: ['./footer.component.css'],
  imports: [AsyncPipe, NgIf],
})
export class FooterComponent implements OnInit {
  userEmail$: Observable<string>;

  backendUrl = environment.server;

  realTimeConnection$: Observable<string>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.userEmail$ = this.store.pipe(select(selectCurrentUserIdentifier));
    this.realTimeConnection$ = this.store.pipe(select(getRealTimeConnection));
  }
}
