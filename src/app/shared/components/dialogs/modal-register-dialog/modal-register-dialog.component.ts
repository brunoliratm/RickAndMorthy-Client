import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { IftaLabelModule } from 'primeng/iftalabel';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ThemeService } from '@core/services/theme.service';
import { AuthService } from '@core/services/auth.service';
import { MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modal-register-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    IftaLabelModule,
    DialogModule,
    FloatLabelModule,
    RouterModule
  ],
  templateUrl: './modal-register-dialog.component.html',
  styleUrls: ['./modal-register-dialog.component.scss']
})
export class ModalRegisterDialogComponent implements OnInit {
  form!: FormGroup;
  theme: 'light' | 'dark' = 'dark'

  constructor(
    private fb: FormBuilder,
    private themeService: ThemeService,
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.themeService.theme$.subscribe((theme) => this.theme = theme)
  }

  onSubmit() {
    if (!this.form.valid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Formulário inválido',
        detail: 'Preencha todos os campos obrigatórios.'
      });
    }

    this.authService.register(this.form.value).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Usuário registrado com sucesso!'
        });

        const headers = res.headers;
        const token = headers.get('Authorization')?.replace('Bearer ', '');
        this.authService.login(token);
      },
      error: (err) => {
        const message = err.error?.message;
        const errors = err.error?.errors;
        let errorMessage = message;

        if (errors) {
          errorMessage = errors[0];
        }

        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: errorMessage
        })
      }
    });
  }
}
