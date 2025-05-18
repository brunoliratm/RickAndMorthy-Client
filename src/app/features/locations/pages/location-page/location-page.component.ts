import { Component } from '@angular/core';
import { HeroComponent } from "@shared/components/hero/hero.component";
import { LocationListComponent } from "@features/locations/components/location-list/location-list.component";

@Component({
  standalone: true,
  selector: 'app-location-page',
  imports: [HeroComponent, LocationListComponent],
  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.scss'
})
export class LocationPageComponent {

}
