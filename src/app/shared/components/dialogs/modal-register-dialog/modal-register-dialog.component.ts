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
    FloatLabelModule
  ],
  templateUrl: './modal-register-dialog.component.html',
  styleUrls: ['./modal-register-dialog.component.scss']
})
export class ModalRegisterDialogComponent implements OnInit {
  form!: FormGroup;
  theme: 'light' | 'dark' = 'dark'

  constructor(
    private fb: FormBuilder,
    private themeService: ThemeService
  ) {}

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
    if (this.form.valid) {
      console.log('Formulário válido:', this.form.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
