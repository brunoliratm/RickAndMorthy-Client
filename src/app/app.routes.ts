import { Routes } from '@angular/router';
import { CharacterPageComponent } from '@features/characters/pages/character-page/character-page.component';
import { LocationPageComponent } from '@features/locations/pages/location-page/location-page.component';
import { EpisodePageComponent } from '@features/episodes/pages/episode-page/episode-page.component';
import { MainComponent } from '@features/home/pages/main/main.component';
import { UserComponent } from '@features/profile/pages/user/user.component';
import { authGuard } from '@core/guards/auth.guard';

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
  },
  {
    path: 'register',
    component: MainComponent,
  },
  {
    path: 'login',
    component: MainComponent,
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    children: [
      { path: '', component: UserComponent, pathMatch: 'full' },
    ],
  },
];
