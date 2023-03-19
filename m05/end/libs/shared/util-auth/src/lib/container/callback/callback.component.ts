import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  standalone: true,
  styleUrls: ['./callback.component.css'],
  providers: [OidcSecurityService],
})
export class CallbackComponent implements OnInit {
  constructor(private service: OidcSecurityService) {}

  ngOnInit(): void {
    // THIS IS JUST A PLACEHOLDER TO HAVE A REDIRECT FROM THE IDP
  }
}
