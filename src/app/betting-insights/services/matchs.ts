import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Match } from '../model/match';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatchsService {

  private baseUrl = 'https://betalyze-tf-cjgafndmb4e4d7fx.westindia-01.azurewebsites.net/api/v1/predictions';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Match[]> {
    return this.http.get<Match[]>(this.baseUrl);
  }
}
