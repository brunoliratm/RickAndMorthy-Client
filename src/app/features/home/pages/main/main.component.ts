import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { CharacterSectionComponent } from '@features/home/components/character-section/character-section.component';
import { EpisodeSectionComponent } from '@features/home/components/episode-section/episode-section.component';
import { LocationSectionComponent } from '@features/home/components/location-section/location-section.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, CharacterSectionComponent, EpisodeSectionComponent, LocationSectionComponent], 
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {

}
