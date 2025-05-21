import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Character } from '@core/models/character.model';
import { CharacterService } from '@core/services/character.service';
import { CardCharacterComponent } from '@shared/components/cards/card-character/card-character.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { FavoritesService } from '@core/services/favorites.service';
import { ItemType } from '@core/enums/item-type';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-character-section',
  standalone: true,
  imports: [CommonModule, CardCharacterComponent, RouterModule, CarouselModule],
  templateUrl: './character-section.component.html',
  styleUrl: './character-section.component.scss',
})
export class CharacterSectionComponent implements OnInit {
  characters: Character[] = [];

  responsiveOptions = [
    {
      breakpoint: '1440px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor(
    private characterService: CharacterService,
    private favoritesService: FavoritesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.characterService.getCharacters({}).subscribe((res) => {
      this.characters = res.results.slice(0, 10);
      if (this.authService.isAuthenticated()) {
        this.favoritesService
          .getFavorites(ItemType.CHARACTER)
          .subscribe((favorites) => {
            this.characters = this.characters.map((character) => {
              const isFavorite = favorites.content.some(
                (favorite) => favorite.item_id === character.id
              );
              return { ...character, isFavorite };
            });
          });
      }
    });
  }
}
