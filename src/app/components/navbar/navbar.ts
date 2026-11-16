import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  listItems = [
    { name: 'Accueil', link: '/' },
    { name: 'Profil', link: '/profil' },
    { name: 'Conferences', link: '/conferences' },
    { name: 'Friends', link: '/friends' },
    { name: 'Notifications', link: '/notifications' },
    { name: 'Logout', link: '/logout' },
  ];

  activeItem = signal('Accueil');

  setActive(name: string): void {
    this.activeItem.set(name);
  }
}