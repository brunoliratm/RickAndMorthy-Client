import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Episode } from '@core/models/episode.model';
import { EpisodeDetailDialogComponent } from '@shared/components/dialogs/episode-detaild-dialog/episode-detail-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { FavoritesService } from '@core/services/favorites.service';
import { ItemType } from '@core/enums/item-type';
import { MessageService } from 'primeng/api';

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
    this.favoritesService.toggleFavorite(
      this.episode.id,
      this.isFavorite,
      ItemType.EPISODE
    );
    if (this.isFavorite) {
      return this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Item adicionado aos favoritos com sucesso',
      });
    }

    this.onRemove.emit();
    return this.messageService.add({
      severity: 'warn',
      summary: 'Erro',
      detail: 'Não foi possível adicionar item aos favoritos',
    });
  }
}
