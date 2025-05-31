import { Component } from '@angular/core';
import { EpisodeListComponent } from "@features/episodes/components/episode-list/episode-list.component";

@Component({
  standalone: true,
  selector: 'app-episode-page',
  imports: [ EpisodeListComponent],
  templateUrl: './episode-page.component.html',
  styleUrl: './episode-page.component.scss',
})
export class EpisodePageComponent {}
