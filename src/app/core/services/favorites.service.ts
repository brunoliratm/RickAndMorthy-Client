import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@core/config/environment';
import { ItemType } from '@core/enums/item-type';
<<<<<<< HEAD
import { Favorite } from '@core/models/favorite.model';
import { Pageable } from '@core/models/pageable.model';
import { Observable } from 'rxjs';

=======
import { Pageable } from '@core/models/pageable.model';
import { Observable } from 'rxjs';

interface Favorite {
  id: number;
  item_id: number;
  item_type: ItemType;
  user_id: number;
  item_data: {};
}

>>>>>>> 916452b9005f111f385919a51e487c7d0f3a4176
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
