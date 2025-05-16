import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Location } from '@core/models/location.model';
import { LocationService } from '@core/services/location.service';
import { CardLocationComponent } from '@shared/components/cards/card-location/card-location.component';
import { forkJoin } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-location-section',
  standalone: true,
  imports: [CommonModule, CardLocationComponent, RouterModule],
  templateUrl: './location-section.component.html',
  styleUrl: './location-section.component.scss',
})
export class LocationSectionComponent implements OnInit {
  locations: Location[] = [];

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    forkJoin([this.locationService.getLocations({ page: 1 })]).subscribe(
      ([res1]) => {
        const locations1 = res1.results.slice(0, 10);
        this.locations = [...locations1];
      }
    );
  }
}
