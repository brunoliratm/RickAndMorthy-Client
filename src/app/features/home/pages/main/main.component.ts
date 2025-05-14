import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Character,
  CharacterService,
} from '@core/services/character.service';
import { HeroComponent } from "../../../../shared/components/hero/hero.component";

interface CharacterResponse {
  results: Character[];
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((res) => {
      this.characters = res.results.slice(0, 5);
    });
  }
}
