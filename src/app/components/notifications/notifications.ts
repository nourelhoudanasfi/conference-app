import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
notificationList = signal([
    {message: 'une nouvelle conference est disponible  .'},
    {message: 'Sami vous a envoye une invitation '},
    {message: 'Votre profil  à ete mis a jour avec succes.'},
  ]);
 show=signal (false);
 bTnTxt=('Afficher les notifications');


 
showNotifications() {
  this.show.set(!this.show());
  this.bTnTxt = this.show() ? 'Masquer les notifications' : 'Afficher les notifications';
  }
}