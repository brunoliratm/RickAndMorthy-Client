import { Component } from '@angular/core';
import { HeroComponent } from "@shared/components/hero/hero.component";
import { EpisodeListComponent } from "@features/episodes/components/episode-list/episode-list.component";

@Component({
  standalone: true,
  selector: 'app-episode-page',
  imports: [HeroComponent, EpisodeListComponent],
  templateUrl: './episode-page.component.html',
  styleUrl: './episode-page.component.scss',
})
export class EpisodePageComponent {}
