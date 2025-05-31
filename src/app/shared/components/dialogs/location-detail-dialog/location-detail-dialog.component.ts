import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@core/models/location.model';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-location-detail-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './location-detail-dialog.component.html',
  styleUrl: './location-detail-dialog.component.scss',
})
export class LocationDetailDialogComponent {
  @Input() location!: Location;
  @Output() closeEvent = new EventEmitter<void>();

  close(): void {
    this.closeEvent.emit();
  }
}
