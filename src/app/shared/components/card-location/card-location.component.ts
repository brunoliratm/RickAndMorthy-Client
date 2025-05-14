import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@core/services/location.service';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-card-location',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './card-location.component.html',
  styleUrl: './card-location.component.scss',
})
export class CardLocationComponent {
  @Input() location!: Location;
  showDialog = false;

  openDialog(): void {
    this.showDialog = true;
  }

  closeDialog(): void {
    this.showDialog = false;
  }
}
