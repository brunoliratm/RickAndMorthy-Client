import { Component } from '@angular/core';
import { HeroComponent } from "@shared/components/hero/hero.component";
import { CardCharacterComponent } from '@shared/components/cards/card-character/card-character.component';
import { ItemType } from '@core/enums/item-type';
import { FavoritesService } from '@core/services/favorites.service';
import { Favorite } from '@core/models/favorite.model';
import { NgFor, NgIf } from '@angular/common';
<<<<<<< HEAD
import { CardEpisodeComponent } from "../../../../shared/components/cards/card-episode/card-episode.component";
import { CardLocationComponent } from '@shared/components/cards/card-location/card-location.component';
=======
>>>>>>> 916452b9005f111f385919a51e487c7d0f3a4176

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
<<<<<<< HEAD
    NgIf,
    NgFor,
    HeroComponent,
    CardCharacterComponent,
    CardEpisodeComponent,
    CardLocationComponent
=======
    HeroComponent,
    CardCharacterComponent,
    NgIf,
    NgFor
>>>>>>> 916452b9005f111f385919a51e487c7d0f3a4176
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {
  isLoading: boolean = true;
  favorites: Favorite[] = []

  public ItemTypeEnum = ItemType;
<<<<<<< HEAD

  constructor(
    private favoritesService: FavoritesService,
  ) { }
=======
  
  constructor(
    private favoritesService: FavoritesService,
  ) {}
>>>>>>> 916452b9005f111f385919a51e487c7d0f3a4176

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

<<<<<<< HEAD
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
=======
  getFilteredCharacters(): Favorite[] {
    return this.favorites.filter((favorite) => favorite.item_type === ItemType.CHARACTER)
>>>>>>> 916452b9005f111f385919a51e487c7d0f3a4176
  }
}
