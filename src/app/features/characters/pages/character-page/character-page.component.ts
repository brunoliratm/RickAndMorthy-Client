import { Component } from '@angular/core';
import { HeroComponent } from "@shared/components/hero/hero.component";

@Component({
  standalone: true,
  selector: 'app-character-page',
  imports: [HeroComponent],
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss'],
})
export class CharacterPageComponent {}
