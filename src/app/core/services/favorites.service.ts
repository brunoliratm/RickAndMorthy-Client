import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@core/config/environment';
import { ItemType } from '@core/enums/item-type';
import { Favorite } from '@core/models/favorite.model';
import { Pageable } from '@core/models/pageable.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private readonly API_URL = `${environment.apiBaseUrl}/favorites`;

  constructor(private httpClient: HttpClient,
    private authService: AuthService,
  ) {}

  getFavorites(itemType: ItemType): Observable<Pageable<Favorite[]>> {
    const params = {
      itemType: itemType,
    };

    return this.httpClient.get<Pageable<Favorite[]>>(this.API_URL, { params, headers: new HttpHeaders({
        Authorization: `Bearer ${this.authService.getToken()}`,
      }) });
  }

  toggleFavorite(
    id: number,
    isFavorite: boolean,
    itemType: ItemType
  ): Observable<Favorite> {
    if (isFavorite) {
      return this.addToFavorites(id, itemType);
    }

    return this.removeFromFavorites(id, itemType);
  }

  private addToFavorites(id: number, itemType: ItemType): Observable<Favorite> {
    const body = {
      itemId: id,
      itemType: itemType,
    };

    return this.httpClient.post<Favorite>(this.API_URL, body, {headers: new HttpHeaders({
        Authorization: `Bearer ${this.authService.getToken()}`,
      })});
  }

  private removeFromFavorites(
    id: number,
    itemType: ItemType
  ): Observable<Favorite> {
    const params = {
      itemType: itemType,
    };

    return this.httpClient.delete<Favorite>(`${this.API_URL}/${id}`, { params , headers: new HttpHeaders({
        Authorization: `Bearer ${this.authService.getToken()}`,
      })});
  }
}
