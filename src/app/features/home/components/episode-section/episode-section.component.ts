import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeService } from '@core/services/episode.service';
import { Episode } from '@core/models/episode.model';
import { CardEpisodeComponent } from '@shared/components/cards/card-episode/card-episode.component';
import { forkJoin } from 'rxjs';
import { RouterModule } from '@angular/router';
import { FavoritesService } from '@core/services/favorites.service';
import { ItemType } from '@core/enums/item-type';
import { AuthService } from '@core/services/auth.service';

type EpisodeWithFavorite = Episode & { isFavorite?: boolean };

@Component({
  selector: 'app-episode-section',
  standalone: true,
  imports: [CommonModule, CardEpisodeComponent, RouterModule],
  templateUrl: './episode-section.component.html',
  styleUrl: './episode-section.component.scss',
})
export class EpisodeSectionComponent implements OnInit {
  episodes: EpisodeWithFavorite[] = [];

  constructor(
    private episodeService: EpisodeService,
    private favoritesService: FavoritesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    forkJoin([this.episodeService.getEpisodes({ page: 1 })]).subscribe(
      ([res1]) => {
        this.episodes = res1.results.slice(0, 10);
        if (this.authService.isAuthenticated()) {
          this.favoritesService
            .getFavorites(ItemType.EPISODE)
            .subscribe((favorites) => {
              this.episodes = this.episodes.map((episode) => {
                const isFavorite = favorites.content.some(
                  (favorite) => favorite.item_id === episode.id
                );
                return { ...episode, isFavorite };
              });
            });
          }
      }
    );
  }
}
