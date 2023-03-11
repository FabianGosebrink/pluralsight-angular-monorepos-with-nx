import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrls: ['./footer.component.css'],
  imports: [AsyncPipe, NgIf],
})
export class FooterComponent {
  @Input() userEmail: string;
  @Input() realTimeConnection: string;

  backendUrl = environment.server;
}
