import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'user_token';
  private authSubject = new BehaviorSubject<boolean>(this.hasToken());
  authStatus$: Observable<boolean> = this.authSubject.asObservable();

  constructor() {}

  login(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.authSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.authSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this.authSubject.getValue();
  }

  private hasToken(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
