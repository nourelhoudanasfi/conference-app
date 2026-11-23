import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';

interface Conference {
  id: number;
  title: string;
  description: string;
  date: Date;
  place: string;
  maxParticipants: number;
  nbParticipants: number;
}

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, NgClass, UpperCasePipe, DatePipe],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  today: Date = new Date();
  searchTerm = '';
  selectedId: number | null = null;

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Les nouveautés d’Angular 21 : signals, zoneless et contrôle de flux natif.',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur la gestion d’état réactive avec les signals.',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 30,
      nbParticipants: 24,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Panorama des technologies web modernes.',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 50,
      nbParticipants: 50,
    },
    {
      // Conférence passée : elle ne doit PAS apparaître (filtre « à venir »)
      id: 4,
      title: 'TypeScript Day',
      description: 'Édition 2025, déjà terminée.',
      date: new Date(2025, 4, 10),
      place: 'Monastir',
      maxParticipants: 80,
      nbParticipants: 80,
    },
  ];

  // Conférences à venir
  get upcoming(): Conference[] {
    return this.conferences.filter((c) => c.date > this.today);
  }

  // À venir + filtrées par le titre saisi
  get filteredConferences(): Conference[] {
    const term = this.searchTerm.trim().toLowerCase();
    return this.upcoming.filter((c) => c.title.toLowerCase().includes(term));
  }

  remaining(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  toggleDetails(id: number): void {
    this.selectedId = this.selectedId === id ? null : id;
  }

  register(c: Conference): void {
    if (this.remaining(c) > 0) {
      c.nbParticipants++;
    }
  }
}