import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { UnderConstruction } from './pages/under-construction';
import { Friends } from './components/friends/friends';
import { Profil } from './components/profil/profil';
import { Notifications } from './components/notifications/notifications';
import { ConferenceList } from './components/conference-list/conference-list';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'profil', component: Profil },
  { path: 'friends', component: Friends },
  { path: 'notifications', component: Notifications },
  { path: 'conferences', component: ConferenceList },
  { path: 'detail', component: UnderConstruction },
  { path: '**', component: UnderConstruction },
];