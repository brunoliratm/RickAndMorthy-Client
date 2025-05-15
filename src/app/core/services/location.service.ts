import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@core/config/environment';
import { Character } from '@core/models/character.model';

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Character[];
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
   private readonly API_URL = `${environment.apiBaseUrl}/locations`;
 
   constructor(private http: HttpClient) {}
 
   getLocations(params: {
     page?: number;
     name?: string;
     type?: string;
     dimension?: string;
     sort?: string;
     direction?: string;
     
   }): Observable<{ results: Location[] }> {
     return this.http.get<{ results: Location[] }>(this.API_URL, { params });
   }

   getLocationById(id: number): Observable<Location> {
    return this.http.get<Location>(`${this.API_URL}/${id}`);
  }
}
