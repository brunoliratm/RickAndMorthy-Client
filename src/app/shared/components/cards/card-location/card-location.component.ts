import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@core/models/location.model';
import { LocationService } from '@core/services/location.service';
import { DialogModule } from 'primeng/dialog';
import { LocationDetailDialogComponent } from '@shared/components/dialogs/location-detail-dialog/location-detail-dialog.component';
import { FavoritesService } from '@core/services/favorites.service';
import { ItemType } from '@core/enums/item-type';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-card-location',
  standalone: true,
  imports: [CommonModule, DialogModule, LocationDetailDialogComponent],
  templateUrl: './card-location.component.html',
  styleUrl: './card-location.component.scss',
})
export class CardLocationComponent {
  @Input() location!: Location;
  @Input() isFavorite = false;
  @Output() onRemove = new EventEmitter<number>();

  showDialog = false;
  selectedLocation!: Location;

  constructor(
    private locationService: LocationService,
    private favoritesService: FavoritesService,
    private messageService: MessageService
  ) {}

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

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    this.favoritesService
      .toggleFavorite(this.location.id, this.isFavorite, ItemType.LOCATION)
      .subscribe((response) => {
        if (this.isFavorite) {
          return this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Item adicionado aos favoritos com sucesso',
          });
        }

        this.onRemove.emit()
        return this.messageService.add({
          severity: 'warn',
          summary: 'Erro',
          detail: 'Não foi possível adicionar item aos favoritos',
        });
      });
  }
}
