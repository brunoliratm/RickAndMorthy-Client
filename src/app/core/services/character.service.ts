import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@core/config/environment';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private readonly API_URL = `${environment.apiBaseUrl}/character`;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<{ results: Character[] }> {
    return this.http.get<{ results: Character[] }>(this.API_URL);
  }
}
