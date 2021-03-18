import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// Model
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userURL = 'api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Get All user from server
   * @returns 
   */
  getAll():Observable<User[]> {
    return this.http.get<User[]>(this.userURL);
  }

  /**
   * A User Join the website
   * @returns 
   */
  join(user: User): Observable<User> {
    return this.http.post<User>(this.userURL, user, this.httpOptions);
      /*.pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );*/
  }

  /**
   * A User Join the website
   * @returns 
   */
   signIn(user: User): Observable<User> {

    // Transform User Input into a User.Id
    this.genId(user);
    
    const url = `${this.userURL}/${user.id}`;

    return this.http.get<User>(url);
      /*.pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );*/
  }

  /**
   * Gen Id from User Input
   * @returns 
   */
  private genId(user: User): void {
    switch (user.mail) {
      case 'Kevin': {
        user.id = 1;
        break;
      }
      case 'Maurine': {
        user.id = 2;
        break;
      }
      default: {
        user.id = 0;
        break;
      }
    }
  }
}
