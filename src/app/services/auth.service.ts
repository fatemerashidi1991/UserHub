import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, map, of, throwError } from "rxjs";
import { AppConfig } from "../constants/app-config";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = AppConfig.authApiUrl;
    private isLoggedInSubject = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this.isLoggedInSubject.asObservable();

    constructor(private http: HttpClient, private router: Router){}

    login(username: string, password: string): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}`, { username, password })
          .pipe(
            map(response => {
              this.isLoggedInSubject.next(true);
              if (this.isBrowser()) {
                localStorage.setItem('token', response.token);
              }
              return response;
            })
          );
      }
    
    logout():void{
        localStorage.removeItem('token');
        this.isLoggedInSubject.next(false);
        this.router.navigate(['/login']);
    }

    getToken(): string | null {
        if (this.isBrowser()) {
            return localStorage.getItem('token');
        }
        return null;
    }
    
    isAuthenticated(): boolean {
        const token = this.getToken();
        return !!token;
    }

    private isBrowser(): boolean {
        return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    }
}