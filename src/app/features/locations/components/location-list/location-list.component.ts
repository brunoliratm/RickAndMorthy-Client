import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Location } from '@core/models/location.model';
import { LocationService } from '@core/services/location.service';
import { CardLocationComponent } from '@shared/components/cards/card-location/card-location.component';
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
  selector: 'app-location-list',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardLocationComponent,
    MenubarModule,
    SelectButtonModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    TooltipModule,
  ],
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.scss',
})
export class LocationListComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private locationService = inject(LocationService);
  private destroy$ = new Subject<void>();

  locations: Location[] = [];
  currentPage = 1;
  totalPages = 1;
  loading = false;
  stateOptions: any[] = [
    { label: 'ASC', value: 'ASC' },
    { label: 'DSC', value: 'DESC' },
  ];
  dimensionOptions: any[] = [
    { label: 'All', value: '' },
    { label: 'Unknown', value: 'unknown' },
    { label: 'Dimension C-137', value: 'Dimension C-137' },
    { label: 'Replacement Dimension', value: 'Replacement Dimension' },
    {
      label: 'Post-Apocalyptic Dimension',
      value: 'Post-Apocalyptic Dimension',
    },
  ];

  filterForm!: FormGroup;

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      name: [''],
      dimension: [''],
      direction: ['ASC'],
    });

    this.loadLocations();

    this.filterForm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(() => {
        this.currentPage = 1;
        this.loadLocations();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadLocations(): void {
    this.loading = true;
    const filters = this.filterForm.value;

    const params: any = { page: this.currentPage };
    if (filters.name) params.name = filters.name;
    if (filters.dimension) params.dimension = filters.dimension;
    if (filters.direction) params.direction = filters.direction;

    this.locationService.getLocations(params).subscribe({
      next: (res) => {
        this.locations = res.results;
        this.totalPages = res.info.pages;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading locations:', err);
        this.loading = false;
        this.locations = [];
        this.totalPages = 1;
      },
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadLocations();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadLocations();
    }
  }
}
