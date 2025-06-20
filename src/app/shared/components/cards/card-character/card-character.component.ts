import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '@core/models/character.model';
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
  ) {}

  openDialog(): void {
    this.showDialog = true;
  }

  closeDialog(): void {
    this.showDialog = false;
  }

}
