import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// Model
import { ShoppingList } from '../model/shopping-list.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private shoppingListURL = 'api/MY_SHOPPING_LIST';

  constructor(
    private http: HttpClient) { }
  
  /**
   * Get shoppingList from server
   * 
   * @returns 
   */
  getShoppingList():Observable<ShoppingList> {
    return this.http.get<ShoppingList>(this.shoppingListURL)
      .pipe(
        catchError(this.handleError<ShoppingList>('getShoppingList', undefined))
      );
  }

  /**
   * TODO - Handle Http operation that failed then Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
