import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  showList = signal(false);

  notifications = [
    'Votre inscription à "Angular 21 Conference" est confirmée.',
    'Nouvelle conférence ajoutée : "Signals Workshop".',
  ];

  toggle(): void {
    this.showList.update((v) => !v);
  }
}