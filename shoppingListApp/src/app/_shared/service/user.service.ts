import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

// Model
import { User } from '../model/user.model';


@Injectable({ providedIn: 'root' })
export class UserService {

  private userURL = '${environment.apiUrl}/users';
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(private http: HttpClient) { }

  /**
   * Get All user from server
   * @returns 
   */
  getAll():Observable<User[]> {
    return this.http.get<User[]>(this.userURL);
  }
}
