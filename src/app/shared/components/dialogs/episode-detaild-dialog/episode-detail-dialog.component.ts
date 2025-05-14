import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '@core/models/character.model';
import { Episode } from '@core/models/episode.model';
import { CharacterService } from '@core/services/character.service';
import { DialogModule } from 'primeng/dialog';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-episode-detail-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './episode-detail-dialog.component.html',
  styleUrl: './episode-detail-dialog.component.scss',
})
export class EpisodeDetailDialogComponent implements OnInit {
  @Input() episode!: Episode;
  @Output() closeEvent = new EventEmitter<void>();

  charactersList: Character[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    if (
      this.episode &&
      this.episode.characters &&
      this.episode.characters.length > 0
    ) {
      const characterRequests: Observable<Character>[] = [];

      this.episode.characters.forEach((character) => {
        if (character && character.id) {
          characterRequests.push(
            this.characterService.getCharacterById(character.id)
          );
        }
      });

      if (characterRequests.length > 0) {
        forkJoin(characterRequests).subscribe((characters) => {
          this.charactersList = characters;
        });
      }
    }
  }

  close(): void {
    this.closeEvent.emit();
  }
}
