import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@core/config/environment';

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly API_URL = `${environment.apiBaseUrl}/location`;

  constructor(private http: HttpClient) {}

  getLocations(): Observable<{ results: Location[] }> {
    return this.http.get<{ results: Location[] }>(this.API_URL);
  }
}
