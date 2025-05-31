import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@core/config/environment';
import { ApiInfo } from '@core/models/api-info.model';
import { Episode } from '@core/models/episode.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  private readonly API_URL = `${environment.apiBaseUrl}/episode`;

  constructor(private http: HttpClient) {}

  getEpisodes(params: {
    page?: number;
    name?: string;
    direction?: string;
  }): Observable<{ info: ApiInfo; results: Episode[] }> {
    const apiParams: any = { page: params.page };
    if (params.name) apiParams.name = params.name;

    return this.http
      .get<{ info: ApiInfo; results: Episode[] }>(this.API_URL, {
        params: apiParams,
      })
      .pipe(
        map((response) => ({
          ...response,
          results: this.sortEpisodes(
            response.results,
            params.direction || 'ASC'
          ),
        }))
      );
  }

  private sortEpisodes(episodes: Episode[], direction: string): Episode[] {
    return episodes.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return direction === 'DESC' ? -comparison : comparison;
    });
  }

  getEpisodeById(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.API_URL}/${id}`);
  }
}
