import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { Admin } from "../models/admin";
import { ErrorMessages } from "../constants/ErrorMessages";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = "";
    private isLoggedInSubject = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this.isLoggedInSubject.asObservable();

    constructor(private http: HttpClient){}

    login(admin: Admin): Observable<any> {
        if (admin.username === 'admin' && admin.password === 'admin') {
          this.isLoggedInSubject.next(true);
          return of({ success: true });
        } else {
          return of({ success: false, message: ErrorMessages.loginFailed });
        }
    }
    
    logout():void{
        this.isLoggedInSubject.next(false);
    }

    isLoggedIn(): boolean {
        return this.isLoggedInSubject.value;
      }
}