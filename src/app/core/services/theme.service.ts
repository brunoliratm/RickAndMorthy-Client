import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<'light' | 'dark'>(this.getCurrentTheme());
  theme$ = this.themeSubject.asObservable();

  constructor() {
    const observer = new MutationObserver(() => {
      const newTheme = this.getCurrentTheme();
      this.themeSubject.next(newTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
  }

  getCurrentTheme(): 'light' | 'dark' {
    const theme = document.documentElement.getAttribute('data-theme');
    return theme === 'light' ? 'light' : 'dark';
  }

  toggleTheme() {
    const current = this.getCurrentTheme();
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    this.themeSubject.next(next);
  }
}
