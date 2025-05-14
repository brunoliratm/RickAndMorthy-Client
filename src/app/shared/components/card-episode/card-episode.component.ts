import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Episode } from '@core/models/episode.model';
import { EpisodeDetailDialogComponent } from '@shared/components/episode-detaild-dialog/episode-detail-dialog.component'; 
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-card-episode',
  standalone: true,
  imports: [
    CommonModule,
    EpisodeDetailDialogComponent,
    DialogModule
  ],
  templateUrl: './card-episode.component.html',
  styleUrl: './card-episode.component.scss',
})
export class CardEpisodeComponent {
  @Input() episode!: Episode;
  showDialog = false;

  openDialog(): void {
    this.showDialog = true;
  }

  closeDialog(): void {
    this.showDialog = false;
  }
}