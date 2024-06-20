import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppConfig } from "../constants/app-config";

@Injectable({
  providedIn: 'root'  
})
export class UserService {
    selectedUser:  User | null = null; ;
    private apiUrl = AppConfig.userApiUrl;
    
    constructor(private http: HttpClient) {
    }

    getUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    getUser(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${id}`);
    }

    addUser(user: any): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<any>(this.apiUrl, user, { headers });
    }

    updateUser(user: any): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put<any>(`${this.apiUrl}/${user.id}`, user, { headers });
    }

    deleteUser(id: number): Observable<any> {
      return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }
}