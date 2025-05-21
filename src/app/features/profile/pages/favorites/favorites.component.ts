import { Component } from '@angular/core';
import { HeroComponent } from "@shared/components/hero/hero.component";
import { CardCharacterComponent } from '@shared/components/cards/card-character/card-character.component';
import { ItemType } from '@core/enums/item-type';
import { FavoritesService } from '@core/services/favorites.service';
import { Favorite } from '@core/models/favorite.model';
import { NgFor, NgIf } from '@angular/common';
import { CardEpisodeComponent } from "../../../../shared/components/cards/card-episode/card-episode.component";
import { CardLocationComponent } from '@shared/components/cards/card-location/card-location.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    HeroComponent,
    CardCharacterComponent,
    CardEpisodeComponent,
    CardLocationComponent
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {
  isLoading: boolean = true;
  favorites: Favorite[] = []

  public ItemTypeEnum = ItemType;

  constructor(
    private favoritesService: FavoritesService,
  ) {}

  ngOnInit(): void {
    this.fetchFavorites();
  }

  private fetchFavorites(): void {
    this.favoritesService.getFavorites(10).subscribe({
      next: (response) => {
        console.log(response);
        this.favorites = response?.content;
        this.isLoading = false;
      }
    });
  }

  getFilteredCharacters(): Extract<Favorite, { item_type: ItemType.CHARACTER }>[] {
    return this.favorites.filter(
      (favorite): favorite is Extract<Favorite, { item_type: ItemType.CHARACTER }> =>
        favorite.item_type === ItemType.CHARACTER
    );
  }

  getFilteredEpisodes(): Extract<Favorite, { item_type: ItemType.EPISODE }>[] {
    return this.favorites.filter(
      (favorite): favorite is Extract<Favorite, { item_type: ItemType.EPISODE }> =>
        favorite.item_type === ItemType.EPISODE
    );
  }

  getFilteredLocations(): Extract<Favorite, { item_type: ItemType.LOCATION }>[] {
    return this.favorites.filter(
      (favorite): favorite is Extract<Favorite, { item_type: ItemType.LOCATION }> =>
        favorite.item_type === ItemType.LOCATION
    );
  }
}
