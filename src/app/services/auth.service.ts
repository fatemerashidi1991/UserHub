import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Admin } from "../models/admin";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = "";
    private isAuthenticated = false;

    constructor(private http: HttpClient){}

    login(admin: Admin): Observable<any> {
        if (admin.username === 'admin' && admin.password === 'admin') {
          this.isAuthenticated = true;
          return of({ success: true });
        } else {
          return of({ success: false });
        }
      }
    logout():void{

    }

    isLoggedIn(): boolean {
        return this.isAuthenticated;
      }
}