import { Routes } from '@angular/router';
import { CharacterListComponent } from '@features/characters/pages/character-list/character-list.component';
import { LocationListComponent } from '@features/locations/pages/location-list/location-list.component';
import { EpisodeListComponent } from '@features/episodes/pages/episode-list/episode-list.component';
import { MainComponent } from '@features/home/pages/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'characters',
    component: CharacterListComponent,
  },
  {
    path: 'locations',
    component: LocationListComponent,
  },
  {
    path: 'episodes',
    component: EpisodeListComponent,
  },
];
