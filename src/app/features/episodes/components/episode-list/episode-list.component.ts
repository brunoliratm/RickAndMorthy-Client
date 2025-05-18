import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Episode } from '@core/models/episode.model';
import { EpisodeService } from '@core/services/episode.service';
import { CardEpisodeComponent } from '@shared/components/cards/card-episode/card-episode.component';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-episode-list',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardEpisodeComponent,
    MenubarModule,
    SelectButtonModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    TooltipModule,
  ],
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.scss',
})
export class EpisodeListComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private episodeService = inject(EpisodeService);
  private destroy$ = new Subject<void>();

  episodes: Episode[] = [];
  currentPage = 1;
  totalPages = 1;
  loading = false;
  stateOptions: any[] = [
    { label: 'ASC', value: 'NAME' },
    { label: 'DSC', value: 'NAME_DESC' },
  ];

  filterForm!: FormGroup;

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      name: [''],
      sort: [''],
    });

    this.loadEpisodes();

    this.filterForm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(() => {
        this.currentPage = 1;
        this.loadEpisodes();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadEpisodes() {
    this.loading = true;
    const filters = this.filterForm.value;

    const params: any = { page: this.currentPage };
    if (filters.name) params.name = filters.name;
    if (filters.sort) params.sort = filters.sort;

    this.episodeService.getEpisodes(params).subscribe({
      next: (res) => {
        this.episodes = res.results;
        this.totalPages = res.info.pages;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.episodes = [];
        this.totalPages = 1;
      },
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadEpisodes();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadEpisodes();
    }
  }
}
