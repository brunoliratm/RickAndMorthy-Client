import { Component, Renderer2, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ModalRegisterDialogComponent } from "../dialogs/modal-register-dialog/modal-register-dialog.component";

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    ModalRegisterDialogComponent
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('themeBtn') themeBtn!: ElementRef;
  @ViewChild('themeIcon') themeIcon!: ElementRef;
  @ViewChild('themeText') themeText!: ElementRef;
  @ViewChild('logotype') logotype!: ElementRef;
  displayModal: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const current = document.documentElement.getAttribute('data-theme') ?? 'dark';

    if (this.themeIcon && this.themeText) {
      const iconClass = current === 'light' ? 'pi pi-moon' : 'pi pi-sun';
      const text = current === 'light' ? 'Dark Mode' : 'Light Mode';

      this.renderer.setAttribute(this.themeIcon.nativeElement, 'class', iconClass);
      this.renderer.setProperty(this.themeText.nativeElement, 'textContent', text);
    }
  }

  toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme') ?? 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);

    if (this.themeIcon && this.themeText) {
      const iconClass = next === 'light' ? 'pi pi-moon' : 'pi pi-sun';
      const text = next === 'light' ? 'Dark Mode' : 'Light Mode';

      this.renderer.setAttribute(this.themeIcon.nativeElement, 'class', iconClass);
      this.renderer.setProperty(this.themeText.nativeElement, 'textContent', text);
    }

    if (this.logotype) {
      this.logotype.nativeElement.src = `assets/icon-${next}.svg`
    }
  }

  showModal() {
    this.displayModal = true;
  }
}