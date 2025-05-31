import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@core/config/environment';
import { ApiInfo } from '@core/models/api-info.model';
import { Location } from '@core/models/location.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private readonly API_URL = `${environment.apiBaseUrl}/location`;

  constructor(private http: HttpClient) {}

  getLocations(params: {
    page?: number;
    name?: string;
    type?: string;
    dimension?: string;
    sort?: string;
    direction?: string;
  }): Observable<{ info: ApiInfo; results: Location[] }> {
    return this.http.get<{ info: ApiInfo; results: Location[] }>(this.API_URL, {
      params,
    });
  }

  getLocationById(id: number): Observable<Location> {
    return this.http.get<Location>(`${this.API_URL}/${id}`);
  }
}
