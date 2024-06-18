import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = "";
    private isAuthenticated = false;

    constructor(private http: HttpClient){}

    login(user: User): Observable<any>{
        return this.http.post<any>(`${this.apiUrl}/login`, { user });
        this.isAuthenticated = true;
    }

    logout():void{
        
    }

    isLoggedIn(): boolean {
        return this.isAuthenticated;
      }
}