import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from '@ps-doggo-rating/auth/state';
import { SignalRService } from '@ps-doggo-rating/doggos/api';
import { LayoutComponent } from './shell/layout/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [LayoutComponent],
})
export class AppComponent implements OnInit {
  title = 'ratemydoggo';

  constructor(private store: Store, private signalRService: SignalRService) {}

  ngOnInit(): void {
    this.checkAuth(null);

    this.signalRService.start();
  }

  private checkAuth(url: string) {
    this.store.dispatch(
      AuthActions.checkAuth({
        url,
      })
    );
  }
}
