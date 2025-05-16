import { Component } from '@angular/core';
import { HeroComponent } from "@shared/components/hero/hero.component";

@Component({
  standalone: true,
  selector: 'app-location-page',
  imports: [HeroComponent],
  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.scss'
})
export class LocationPageComponent {

}
