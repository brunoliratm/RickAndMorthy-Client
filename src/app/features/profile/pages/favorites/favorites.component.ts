import { Component, inject } from '@angular/core';
import { HeroComponent } from '@shared/components/hero/hero.component';
import { CardCharacterComponent } from '@shared/components/cards/card-character/card-character.component';
import { ItemType } from '@core/enums/item-type';
import { FavoritesService } from '@core/services/favorites.service';
import { Favorite } from '@core/models/favorite.model';
import { NgFor, NgIf } from '@angular/common';
import { CardEpisodeComponent } from '../../../../shared/components/cards/card-episode/card-episode.component';
import { CardLocationComponent } from '@shared/components/cards/card-location/card-location.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    HeroComponent,
    CardCharacterComponent,
    CardEpisodeComponent,
    CardLocationComponent,
    MenubarModule,
    ButtonModule,
    ReactiveFormsModule,
    SelectButtonModule,
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {
  public isLoading: boolean = true;
  public favorites: Favorite[] = [];
  public ItemTypeEnum = ItemType;
  public filterForm!: FormGroup;
  public stateOptions: any[] = [
    { label: 'Characters', value: ItemType.CHARACTER },
    { label: 'Episodes', value: ItemType.EPISODE },
    { label: 'Locations', value: ItemType.LOCATION },
  ];
  public currentPage: number = 1;

  private destroy$ = new Subject<void>();
  private fb = inject(FormBuilder);

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.fetchFavorites(ItemType.CHARACTER);

    this.filterForm = this.fb.group({
      itemType: [this.stateOptions[0].value],
    });

    this.filterForm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(() => {
        this.currentPage = 1;
        const itemType = this.filterForm.value.itemType;
        this.fetchFavorites(itemType);
    });
  }

  private fetchFavorites(itemType: ItemType): void {
    this.favoritesService.getFavorites(itemType).subscribe({
      next: (response) => {
        this.favorites = response?.content;
        this.isLoading = false;
      },
    });
  }

  getFilteredCharacters(): Extract<
    Favorite,
    { item_type: ItemType.CHARACTER }
  >[] {
    return this.favorites.filter(
      (
        favorite
      ): favorite is Extract<Favorite, { item_type: ItemType.CHARACTER }> =>
        favorite.item_type === ItemType.CHARACTER
    );
  }

  getFilteredEpisodes(): Extract<Favorite, { item_type: ItemType.EPISODE }>[] {
    return this.favorites.filter(
      (
        favorite
      ): favorite is Extract<Favorite, { item_type: ItemType.EPISODE }> =>
        favorite.item_type === ItemType.EPISODE
    );
  }

  getFilteredLocations(): Extract<
    Favorite,
    { item_type: ItemType.LOCATION }
  >[] {
    return this.favorites.filter(
      (
        favorite
      ): favorite is Extract<Favorite, { item_type: ItemType.LOCATION }> =>
        favorite.item_type === ItemType.LOCATION
    );
  }

  favoriteRemoved(): void {
    this.fetchFavorites(this.filterForm.value.itemType);
  }
}
