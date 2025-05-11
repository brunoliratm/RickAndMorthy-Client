import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@core/config/environment';
import { Observable } from 'rxjs';
import { Character } from '@core/models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly API_URL = `${environment.apiBaseUrl}/characters`;

  constructor(private http: HttpClient) {}

  getCharacters(params: {
    page?: number;
    direction?: string;
    sort?: string;
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
  }): Observable<{ results: Character[] }> {
    return this.http.get<{ results: Character[] }>(this.API_URL, { params });
  }
}
