import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5001/api/actions';

  constructor(private http: HttpClient) {}

  getActions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addAction(action: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, action);
  }
}
