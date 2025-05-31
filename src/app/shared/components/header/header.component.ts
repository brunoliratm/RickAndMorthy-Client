import {
  Component,
  Renderer2,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RouterModule, Router } from '@angular/router';
import { ThemeService } from '@core/services/theme.service';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    RouterModule,
    MenuModule,
    RouterModule,
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('themeBtn') themeBtn!: ElementRef;
  @ViewChild('themeIcon') themeIcon!: ElementRef;
  @ViewChild('themeText') themeText!: ElementRef;
  @ViewChild('logotype') logotype!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private themeService: ThemeService,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    const current =
      document.documentElement.getAttribute('data-theme') ?? 'dark';

    if (this.themeIcon && this.themeText) {
      const iconClass = current === 'light' ? 'pi pi-moon' : 'pi pi-sun';
      const text = current === 'light' ? 'Dark Mode' : 'Light Mode';

      this.renderer.setAttribute(
        this.themeIcon.nativeElement,
        'class',
        iconClass
      );
      this.renderer.setProperty(
        this.themeText.nativeElement,
        'textContent',
        text
      );
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
