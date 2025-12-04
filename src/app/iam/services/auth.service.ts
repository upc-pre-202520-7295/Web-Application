import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    email: string;
    fullName: string;
    token: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api = 'http://localhost:8091/api/v1/auth';

  private userSubject = new BehaviorSubject<AuthResponse['data'] | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    const stored = localStorage.getItem('user');
    if (stored) {
      this.userSubject.next(JSON.parse(stored));
    }
  }

  get token(): string | null {
    return this.userSubject.value?.token ?? null;
  }

  get userId(): string | null {
    return this.userSubject.value?.id ?? null;
  }

  register(email: string, password: string, fullName: string) {
    return this.http.post<AuthResponse>(`${this.api}/register`, {
      email,
      password,
      fullName
    }).pipe(
      tap(res => {
        localStorage.setItem('user', JSON.stringify(res.data));
        this.userSubject.next(res.data);
      })
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.api}/login`, {
      email,
      password
    }).pipe(
      tap(res => {
        localStorage.setItem('user', JSON.stringify(res.data));
        this.userSubject.next(res.data);
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }

}
