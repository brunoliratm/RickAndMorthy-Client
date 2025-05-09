import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@core/config/environment';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  type: string;
  image: string;
  location: {
    name: string;
    url: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly API_URL = `${environment.apiBaseUrl}/characters`;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<{ results: Character[] }> {
    return this.http.get<{ results: Character[] }>(this.API_URL);
  }
}
