import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Character } from '@core/models/character.model';
import { CharacterService } from '@core/services/character.service';
import { CardCharacterComponent } from '@shared/components/cards/card-character/card-character.component';
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
  selector: 'app-character-list',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardCharacterComponent,
    MenubarModule,
    SelectButtonModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    TooltipModule,
  ],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private characterService = inject(CharacterService);
  private destroy$ = new Subject<void>();

  characters: Character[] = [];
  currentPage = 1;
  totalPages = 1;
  loading = false;
  stateOptions: any[] = [
    { label: 'ASC', value: 'ASC' },
    { label: 'DSC', value: 'DESC' },
  ];
  statusOptions: any[] = [
    { label: 'All', value: '' },
    { label: 'Alive', value: 'ALIVE' },
    { label: 'Dead', value: 'DEAD' },
    { label: 'Unknown', value: 'UNKNOWN' },
  ];
  speciesOptions: any[] = [
    { label: 'All', value: '' },
    { label: 'Human', value: 'HUMAN' },
    { label: 'Alien', value: 'ALIEN' },
    { label: 'Robot', value: 'ROBOT' },
    { label: 'Humanoid', value: 'HUMANOID' },
    { label: 'Animal', value: 'ANIMAL' },
    { label: 'Poopybutthole', value: 'POOPYBUTTHOLE' },
    { label: 'Unknown', value: 'UNKNOWN' },
  ];

  filterForm!: FormGroup;

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      name: [''],
      status: [''],
      species: [''],
      direction: ['ASC'],
    });

    this.loadCharacters();

    this.filterForm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(() => {
        this.currentPage = 1;
        this.loadCharacters();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadCharacters(): void {
    this.loading = true;
    const filters = this.filterForm.value;

    const params: any = { page: this.currentPage };
    if (filters.name) params.name = filters.name;
    if (filters.status) params.status = filters.status;
    if (filters.species) params.species = filters.species;
    if (filters.direction) params.direction = filters.direction;

    this.characterService.getCharacters(params).subscribe({
      next: (res) => {
        this.characters = res.results;
        this.totalPages = res.info.pages;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading characters:', err);
        this.loading = false;
        this.characters = [];
        this.totalPages = 1;
      },
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }
}
