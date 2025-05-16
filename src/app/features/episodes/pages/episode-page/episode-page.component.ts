import { Component } from '@angular/core';
import { HeroComponent } from "@shared/components/hero/hero.component";

@Component({
  standalone: true,
  selector: 'app-episode-page',
  imports: [HeroComponent],
  templateUrl: './episode-page.component.html',
  styleUrl: './episode-page.component.scss',
})
export class EpisodePageComponent {}
