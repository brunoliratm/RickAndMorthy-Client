import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeroComponent } from "@shared/components/hero/hero.component";
import { CharacterSectionComponent } from '@features/home/components/character-section/character-section.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HeroComponent, CharacterSectionComponent ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {

}
