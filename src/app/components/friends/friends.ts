import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends',
  imports: [FormsModule],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {
  friendsList = [{ name: 'Sami' }, { name: 'Sarra' }, { name: 'Amine' }];

  searchTerm = signal('');

  filteredFriends = computed(() =>
    this.friendsList.filter((f) =>
      f.name.toLowerCase().includes(this.searchTerm().trim().toLowerCase())
    )
  );
}