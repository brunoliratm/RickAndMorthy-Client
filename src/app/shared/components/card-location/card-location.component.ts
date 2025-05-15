import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location, LocationService } from '@core/services/location.service';
import { DialogModule } from 'primeng/dialog';
import { LocationDetailDialogComponent } from "../dialogs/location-detail-dialog/location-detail-dialog.component";

@Component({
  selector: 'app-card-location',
  standalone: true,
  imports: [CommonModule, DialogModule, LocationDetailDialogComponent],
  templateUrl: './card-location.component.html',
  styleUrl: './card-location.component.scss',
})
export class CardLocationComponent {
  @Input() location!: Location;
  showDialog = false;
  selectedLocation!: Location; 

  constructor(private locationService: LocationService) {}

  openDialog(): void {
    this.locationService.getLocationById(this.location.id).subscribe({
      next: (fullLocation) => {
        this.selectedLocation = fullLocation;
        this.showDialog = true;
      },
    });
  }

  closeDialog(): void {
    this.showDialog = false;
  }
}
