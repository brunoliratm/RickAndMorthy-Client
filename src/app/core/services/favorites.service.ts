import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@core/config/environment';
import { Favorite } from '@core/models/favorite.model';
import { Pageable } from '@core/models/pageable.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly API_URL = `${environment.apiBaseUrl}/favorites`;

  constructor(private httpClient: HttpClient) {}

  getFavorites(user_id: number): Observable<Pageable<Favorite[]>> {
    return this.httpClient.get<Pageable<Favorite[]>>(this.API_URL);
  }
}
