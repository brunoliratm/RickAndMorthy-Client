import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '@core/models/character.model';
import { Episode } from '@core/models/episode.model';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-episode-detail-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './episode-detail-dialog.component.html',
  styleUrl: './episode-detail-dialog.component.scss',
})
export class EpisodeDetailDialogComponent{
  @Input() episode!: Episode;
  @Output() closeEvent = new EventEmitter<void>();


  charactersList: Character[] = [];

  ngOnChanges(): void {
    if (this.episode && this.episode.characters) {
      this.charactersList = this.episode.characters;
    }
  }

  close(): void {
    this.closeEvent.emit();
  }
}
