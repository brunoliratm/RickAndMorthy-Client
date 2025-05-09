import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { CharacterSectionComponent } from '@features/home/components/character-section/character-section.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, CharacterSectionComponent ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {

}
