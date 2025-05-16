import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeService } from '@core/services/episode.service';
import { Episode } from '@core/models/episode.model';
import { CardEpisodeComponent } from '@shared/components/cards/card-episode/card-episode.component';
import { forkJoin } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-episode-section',
  standalone: true,
  imports: [CommonModule, CardEpisodeComponent, RouterModule],
  templateUrl: './episode-section.component.html',
  styleUrl: './episode-section.component.scss',
})
export class EpisodeSectionComponent implements OnInit {
  episodes: Episode[] = [];

  constructor(private episodeService: EpisodeService) {}

  ngOnInit(): void {

    forkJoin([
      this.episodeService.getEpisodes({ page: 1 }),
    ]).subscribe(([res1]) => {
      const episodes1 = res1.results.slice(0, 10);
      this.episodes = [...episodes1];
    });
  }
}
