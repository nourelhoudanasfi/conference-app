import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  listItems = [
    { name: 'Accueil', link: '/' },
    { name: 'Profil', link: '/profil' },
    { name: 'Conférences', link: '/conferences' },
    { name: 'Détail', link: '/detail' },
    { name: 'Amis', link: '/friends' },
    { name: 'Notifications', link: '/notifications' },
  ];
}