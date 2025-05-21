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
    });
  }

  closeRegisterModal() {
    this.showRegisterModal = false;
    this.router.navigate(['/']);
  }

}