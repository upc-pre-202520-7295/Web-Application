import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Match } from '../model/match';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatchsService {

  private baseUrl = 'http://localhost:8093/api/v1/matchs';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Match[]> {
    return this.http.get<Match[]>(this.baseUrl);
  }
}