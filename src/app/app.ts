import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Notifications } from './components/notifications/notifications';
import { Profil } from './components/profil/profil';
import { Friends } from './components/friends/friends';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, Profil, Friends, Notifications, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}