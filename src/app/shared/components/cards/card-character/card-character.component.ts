import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemType } from '@core/enums/item-type';
import { Character } from '@core/models/character.model';
import { FavoritesService } from '@core/services/favorites.service';
import { CharacterDetailDialogComponent } from '@shared/components/dialogs/character-detail-dialog/character-detail-dialog.component';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    CharacterDetailDialogComponent,
  ],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.scss',
})
export class CardCharacterComponent {
  @Input() character!: Character;
  @Input() isFavorite = false;
  @Output() onRemove = new EventEmitter<number>();

  showDialog = false;

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
      .toggleFavorite(this.character.id, this.isFavorite, ItemType.CHARACTER)
      .subscribe({
        next: () => {
          if (!this.isFavorite) {
            return this.onRemove.emit(this.character.id)
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
        }
      });
  }
}
