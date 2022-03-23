//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
//#endregion

//#region Module
import * as fromAccount from '@account/store';
import * as fromLoader from '@loader/store';
//#endregion


@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {

  isLogged: boolean = false;

  constructor(private store: Store) { 
    this.store.select(fromAccount.isLogged).subscribe(value => this.isLogged=value);
  }

  /**
   * Handle Http operation that failed then Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
 // TODO - Handle as a reducer ?
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe()
      // As the server answered, we stop the loader
      .pipe(finalize(() => this.store.dispatch(fromLoader.stopLoaderAction())))
      // Dealing with error response
      .pipe(catchError(err => {

          // If HTTP error ('unauthorized'|'forbidden') & User is logged, auto logout 
          if ([401, 403].includes(err.status) && this.isLogged) {
            this.store.dispatch(fromAccount.autoLogoutAction({ error:err }));
          }

          const error = (err && err.error && err.error.message) || err.statusText;

          // TODO - Process the error coming from server
          //  > Error msg understandable for the user
          //  > Make the error go through the logging solution
          // this.log(`${operation} failed: ${error.message}`);
          console.error(err);

          // TODO - deprecated
          return throwError(error);
    }))
  }
}
