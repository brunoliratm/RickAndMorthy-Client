import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@core/config/environment';
import { Episode } from '@core/models/episode.model';
import { ApiInfo } from '@core/models/api-info.model';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  private readonly API_URL = `${environment.apiBaseUrl}/episodes`;

  constructor(private http: HttpClient) {}

  getEpisodes(params: {
    page?: number;
    name?: string;
    episode?: string;
    sort?: string;
  }): Observable<{ info: ApiInfo; results: Episode[] }> {
    return this.http.get<{ info: ApiInfo; results: Episode[] }>(this.API_URL, {
      params,
    });
  }
}
