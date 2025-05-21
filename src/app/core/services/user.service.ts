import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@core/config/environment';
import { User } from '@core/models/user.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = environment.apiBaseUrl + '/users';

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  userProfile(): Observable<User> {
    return this.httpClient.get<User>(`${this.userUrl}/me`);
  }

  deleteUser(): Observable<any> {
    return this.httpClient.delete(`${this.userUrl}`, {
      observe: 'response',
    });
  }

  updateUserProfile(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.userUrl}`, user, {
      params: {
        id:1,
      },
    });
  }

  updateUserPassword(
    currentPassword: string,
    newPassword: string,
    confirmNewPassword: string
  ): Observable<any> {
    const body = {
      currentPassword,
      newPassword,
      confirmNewPassword
    };

    return this.httpClient.post(`${this.userUrl}/forgot-password`, body);
  }
}
