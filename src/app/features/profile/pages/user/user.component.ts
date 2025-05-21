import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@core/models/user.model';
import { AuthService } from '@core/services/auth.service';
import { UserService } from '@core/services/user.service';
import { HeroComponent } from '@shared/components/hero/hero.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  standalone: true,
  selector: 'app-user',
  imports: [
    CommonModule,
    HeroComponent,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    ConfirmDialogModule,
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  userData: User = {
    name: '',
    surname: '',
    email: '',
  };

  profileForm!: FormGroup;
  passwordForm!: FormGroup;
  loading = false;
  editMode = false;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadUserInfo();
    this.initForms();
  }

  initForms(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.passwordForm = this.fb.group(
      {
        currentPassword: ['', Validators.required],
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmNewPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmNewPassword')?.value;

    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }

  loadUserInfo(): void {
    this.loading = true;
    this.userService.userProfile().subscribe({
      next: (user) => {
        this.userData = user;
        this.loading = false;
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to load user profile',
        });
        this.loading = false;
      },
    });
  }

  toggleEditMode(): void {
    this.editMode = true;
    this.profileForm.setValue({
      name: this.userData.name,
      surname: this.userData.surname,
      email: this.userData.email,
    });
  }

  cancelEdit(): void {
    this.editMode = false;
    this.profileForm.reset();
  }

  updateProfile(): void {
    if (this.profileForm.invalid) {
      return;
    }

    this.loading = true;
    const updatedUser: User = this.profileForm.value;

    this.userService.updateUserProfile(updatedUser).subscribe({
      next: (user) => {
        this.userData = user;
        this.editMode = false;
        this.loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Profile updated successfully',
        });
        this.loadUserInfo();
      },
      error: (error) => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.error?.message || 'Failed to update profile',
        });
      },
    });
  }

  updatePassword(): void {
    if (this.passwordForm.invalid) {
      return;
    }

    this.loading = true;
    const { currentPassword, newPassword, confirmNewPassword } =
      this.passwordForm.value;

    this.userService
      .updateUserPassword(currentPassword, newPassword, confirmNewPassword)
      .subscribe({
        next: () => {
          this.passwordForm.reset();
          this.loading = false;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Password updated successfully',
          });
        },
        error: (error) => {
          this.loading = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error?.message || 'Failed to update password',
          });
        },
      });
  }

  confirmDelete(): void {
    this.confirmationService.confirm({
      message:
        'Are you serious? This will delete your account permanently. As Rick would say, "Think for yourselves. Don\'t be sheep."',
      accept: () => {
        this.loading = true;
        this.userService.deleteUser().subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Account deleted successfully',
            });
            this.authService.logout();
            this.router.navigate(['/']);
          },
          error: (error) => {
            this.loading = false;
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: error.error?.message || 'Failed to delete account',
            });
          },
        });
      },
    });
  }
}
