import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Character } from '@core/models/character.model';
import { CharacterService } from '@core/services/character.service';
import { CardCharacterComponent } from '@shared/components/cards/card-character/card-character.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-character-section',
  standalone: true,
  imports: [
    CommonModule,
    CardCharacterComponent,
    RouterModule,
    CarouselModule
  ],
  templateUrl: './character-section.component.html',
  styleUrl: './character-section.component.scss',
})
export class CharacterSectionComponent implements OnInit {
  characters: Character[] = [];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService
      .getCharacters({})
      .subscribe((res) => {
        this.characters = res.results.slice(0, 10);
      });
  }
}
