import { Component } from '@angular/core';
import { LocationListComponent } from "@features/locations/components/location-list/location-list.component";

@Component({
  standalone: true,
  selector: 'app-location-page',
  imports: [LocationListComponent],
  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.scss'
})
export class LocationPageComponent {

}
