import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Character,
  CharacterService,
} from '@core/services/character.service';

interface CharacterResponse {
  results: Character[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((res) => {
      this.characters = res.results.slice(0, 5);
    });
  }
}
