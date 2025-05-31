import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@core/config/environment';
import { ApiInfo } from '@core/models/api-info.model';
import { Location } from '@core/models/location.model';
import { Observable, map } from 'rxjs';

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
    const apiParams: any = { page: params.page };
    if (params.name) apiParams.name = params.name;
    if (params.type) apiParams.type = params.type;
    if (params.dimension) apiParams.dimension = params.dimension;

    return this.http
      .get<{ info: ApiInfo; results: Location[] }>(this.API_URL, {
        params: apiParams,
      })
      .pipe(
        map((response) => ({
          ...response,
          results: this.sortLocations(
            response.results,
            params.direction || 'ASC'
          ),
        }))
      );
  }

  private sortLocations(locations: Location[], direction: string): Location[] {
    return locations.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return direction === 'DESC' ? -comparison : comparison;
    });
  }

  getLocationById(id: number): Observable<Location> {
    return this.http.get<Location>(`${this.API_URL}/${id}`);
  }
}
