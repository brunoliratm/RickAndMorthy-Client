import { Component } from '@angular/core';
import { HeroComponent } from "@shared/components/hero/hero.component";
import { CharacterListComponent } from "@features/characters/components/character-list/character-list.component";

@Component({
  standalone: true,
  selector: 'app-character-page',
  imports: [HeroComponent, CharacterListComponent],
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss'],
})
export class CharacterPageComponent {}
