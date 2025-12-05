import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Team } from '../model/team';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { AuthService } from '../../iam/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class Teams extends BaseService<Team>{
  constructor(
    http: HttpClient,
    private httpTeams: HttpClient,
    private authService: AuthService
  ) {
    super(http);
    this.resourceEndpoint = '/teams';
  }

  /** Obtener TODOS los equipos */
  override getAll(): Observable<any> {
    return this.httpTeams
      .get(`${this.basePath}${this.resourceEndpoint}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  /** Obtener FAVORITOS del usuario */
  getFavorites(): Observable<any> {
    const userId = this.authService.userId;
    return this.httpTeams
      .get(`${this.basePath}${this.resourceEndpoint}/user/${userId}/favorite`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  /** Agregar un equipo FAVORITO */
  addFavorite(teamId: string): Observable<any> {
    const userId = this.authService.userId;
    return this.httpTeams
      .post(
        `${this.basePath}${this.resourceEndpoint}/user/${userId}/favorite/${teamId}`,
        {},
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  /** Eliminar equipo FAVORITO */
  removeFavorite(teamId: string): Observable<any> {
    const userId = this.authService.userId;
    return this.httpTeams
      .delete(
        `${this.basePath}${this.resourceEndpoint}/user/${userId}/favorite/${teamId}`,
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }
  
}
