import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:5100/api/User/';

  constructor(private http: HttpClient, private router: Router) {

   }

  signUp(userObj: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}register`, userObj);
  }

  signIn(loginObj: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj);
  }
  

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}getUser`);
  }
}
