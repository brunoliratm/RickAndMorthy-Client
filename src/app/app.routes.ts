import { Routes } from '@angular/router';
import { CharacterPageComponent } from '@features/characters/pages/character-page/character-page.component';
import { LocationPageComponent } from '@features/locations/pages/location-page/location-page.component';
import { EpisodePageComponent } from '@features/episodes/pages/episode-page/episode-page.component';
import { MainComponent } from '@features/home/pages/main/main.component';


export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'characters',
    component: CharacterPageComponent,
  },
  {
    path: 'locations',
    component: LocationPageComponent,
  },
  {
    path: 'episodes',
    component: EpisodePageComponent,
  }
];
