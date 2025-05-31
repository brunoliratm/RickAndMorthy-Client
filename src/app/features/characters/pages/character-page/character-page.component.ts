import { Component } from '@angular/core';
import { CharacterListComponent } from "@features/characters/components/character-list/character-list.component";

@Component({
  standalone: true,
  selector: 'app-character-page',
  imports: [ CharacterListComponent],
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss'],
})
export class CharacterPageComponent {}
