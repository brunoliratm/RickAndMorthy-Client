import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Character,
  CharacterService,
} from '@core/services/character.service';
import { CardCharacterComponent } from '@shared/components/card-character/card-character.component';

@Component({
  selector: 'app-character-section',
  standalone: true,
  imports: [ CommonModule , CardCharacterComponent],
  templateUrl: './character-section.component.html',
  styleUrl: './character-section.component.scss'
})

export class CharacterSectionComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((res) => {
      this.characters = res.results.slice(0, 5);
    });
  }

}
