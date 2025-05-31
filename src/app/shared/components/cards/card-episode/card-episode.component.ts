import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Episode } from '@core/models/episode.model';
import { EpisodeDetailDialogComponent } from '@shared/components/dialogs/episode-detaild-dialog/episode-detail-dialog.component';
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
  ) {}

  openDialog(): void {
    this.showDialog = true;
  }

  closeDialog(): void {
    this.showDialog = false;
  }

}
