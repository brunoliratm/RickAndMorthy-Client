import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Episode } from '@core/models/episode.model';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-episode-detail-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './episode-detail-dialog.component.html',
  styleUrl: './episode-detail-dialog.component.scss',
})
export class EpisodeDetailDialogComponent {
  @Input() episode!: Episode;
  @Output() closeEvent = new EventEmitter<void>();

  close(): void {
    this.closeEvent.emit();
  }
  get characterNames(): string {
  return this.episode?.characters?.map(c => c.name).join(', ') || '';
}

}
