import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@core/config/environment';
import { ApiInfo } from '@core/models/api-info.model';
import { Character } from '@core/models/character.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly API_URL = `${environment.apiBaseUrl}/character`;

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
  }): Observable<{ info: ApiInfo; results: Character[] }> {
    const apiParams: any = { page: params.page };
    if (params.name) apiParams.name = params.name;
    if (params.status) apiParams.status = params.status;
    if (params.species) apiParams.species = params.species;
    if (params.type) apiParams.type = params.type;
    if (params.gender) apiParams.gender = params.gender;

    return this.http
      .get<{ info: ApiInfo; results: Character[] }>(this.API_URL, {
        params: apiParams,
      })
      .pipe(
        map((response) => ({
          ...response,
          results: this.sortCharacters(
            response.results.map((character) => ({
              ...character,
              location: {
                name: character.location?.name || 'Unknown',
              },
            })),
            params.direction || 'ASC'
          ),
        }))
      );
  }

  private sortCharacters(
    characters: Character[],
    direction: string
  ): Character[] {
    return characters.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return direction === 'DESC' ? -comparison : comparison;
    });
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.API_URL}/${id}`).pipe(
      map((character) => ({
        ...character,
        location: {
          name: character.location?.name || 'Unknown',
        },
      }))
    );
  }
}
