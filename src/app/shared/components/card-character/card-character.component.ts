import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '@core/services/character.service';

@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.scss'
})
export class CardCharacterComponent {
  @Input() character!: Character;
}
