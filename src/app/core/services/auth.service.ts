import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@core/config/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'user_token';
  private authSubject = new BehaviorSubject<boolean>(this.hasToken());
  private authUrl = environment.apiBaseUrl + '/auth'

  authStatus$: Observable<boolean> = this.authSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  register(body: {name: string, surname: string, email: string, password: string}): Observable<any> {
    return this.httpClient.post(`${this.authUrl}/register`, body, { observe: 'response' });
  }

  login(body: {email: string, password: string}): Observable<any> {
    return this.httpClient.post(`${this.authUrl}/login`, body, { observe: 'response' });
  }

  saveToken(token: string): void {
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
