import {
  AsyncPipe,
  JsonPipe,
  KeyValuePipe,
  NgFor,
  NgIf,
} from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  styleUrls: ['./about.component.css'],
  imports: [JsonPipe, NgFor, KeyValuePipe, NgIf, AsyncPipe],
})
export class AboutComponent implements OnInit {
  userAgent = window.navigator.userAgent;

  ngOnInit(): void {}
}
