import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  appName = signal('Conference app');
  subtitle = signal('Welcome to the conference user interface');
}