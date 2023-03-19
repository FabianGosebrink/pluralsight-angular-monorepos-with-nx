import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from '@ps-doggo-rating/shared/util-auth';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [LayoutComponent],
})
export class AppComponent implements OnInit {
  title = 'ratemydoggo';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.checkAuth();
  }

  private checkAuth() {
    this.store.dispatch(AuthActions.checkAuth());
  }
}
