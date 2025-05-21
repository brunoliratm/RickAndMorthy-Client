import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemType } from '@core/enums/item-type';
import { Episode } from '@core/models/episode.model';
import { FavoritesService } from '@core/services/favorites.service';
import { EpisodeDetailDialogComponent } from '@shared/components/dialogs/episode-detaild-dialog/episode-detail-dialog.component';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-card-episode',
  standalone: true,
  imports: [CommonModule, EpisodeDetailDialogComponent, DialogModule],
  templateUrl: './card-episode.component.html',
  styleUrl: './card-episode.component.scss',
})
export class CardEpisodeComponent {
  @Input() episode!: Episode;
  @Input() isFavorite = false;
  showDialog = false;

  @Output() onRemove = new EventEmitter<number>();

  constructor(
    private favoritesService: FavoritesService,
    private messageService: MessageService
  ) {}

  openDialog(): void {
    this.showDialog = true;
  }

  closeDialog(): void {
    this.showDialog = false;
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    this.favoritesService
      .toggleFavorite(this.episode.id, this.isFavorite, ItemType.EPISODE)
      .subscribe({
        next: () => {
          if (!this.isFavorite) {
            return this.onRemove.emit(this.episode.id);
          }

          return this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Item adicionado aos favoritos com sucesso',
          });
        },
        error: () => {
          return this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possível adicionar item aos favoritos',
          });
        },
      });
  }
}
