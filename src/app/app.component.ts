import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@shared/components/header/header.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '@core/services/auth.service';
import { filter } from 'rxjs/operators';
import { ModalRegisterDialogComponent } from '@shared/components/dialogs/modal-register-dialog/modal-register-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ModalLoginDialogComponent } from '@shared/components/dialogs/modal-login-dialog/modal-login-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    ToastModule,
    ModalRegisterDialogComponent,
    ModalLoginDialogComponent,
    DialogModule,
    ButtonModule
  ],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RickAndMorty-Client';
  showRegisterModal: boolean = false
  showLoginModal: boolean = false

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.authStatus$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate(['']);
      }
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showRegisterModal = event.url === '/register';
      this.showLoginModal = event.url === '/login';
    });
  }

  closeModal() {
    this.showRegisterModal = false;
    this.showLoginModal = false;
    this.router.navigate(['/']);
  }
}