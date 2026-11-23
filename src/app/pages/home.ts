import { Component } from '@angular/core';
import { Profil } from '../components/profil/profil';
import { Friends } from '../components/friends/friends';
import { Notifications } from '../components/notifications/notifications';

@Component({
  selector: 'app-home',
  imports: [Profil, Friends, Notifications],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}