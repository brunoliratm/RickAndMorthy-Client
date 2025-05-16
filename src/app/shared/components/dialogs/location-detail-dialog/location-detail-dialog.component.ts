import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '@core/models/character.model';
import { Location } from '@core/models/location.model';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-location-detail-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './location-detail-dialog.component.html',
  styleUrl: './location-detail-dialog.component.scss',
})
export class LocationDetailDialogComponent implements OnInit {
  @Input() location!: Location;
  @Output() closeEvent = new EventEmitter<void>();

  charactersList: Character[] = [];

ngOnInit(): void {
  if (this.location && this.location.residents) {
    this.charactersList = this.location.residents;
  }
}

  close(): void {
    this.closeEvent.emit();
  }
}
