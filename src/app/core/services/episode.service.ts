import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@core/config/environment';

export interface Episode {
  id: number;
  name: string;
  episode: string;
  air_date: string;
}

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private readonly API_URL = `${environment.apiBaseUrl}/episode`;

  constructor(private http: HttpClient) {}

  getEpisodes(): Observable<{ results: Episode[] }> {
    return this.http.get<{ results: Episode[] }>(this.API_URL);
  }
}

