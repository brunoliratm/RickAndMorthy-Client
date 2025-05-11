import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '@core/models/character.model';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-character-detail-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './character-detail-dialog.component.html',
  styleUrl: './character-detail-dialog.component.scss',
})
export class CharacterDetailDialogComponent {
  @Input() character!: Character;
  @Output() closeEvent = new EventEmitter<void>();

  close(): void {
    this.closeEvent.emit();
  }
}
