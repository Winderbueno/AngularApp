//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Store } from '@ngrx/store';
//#endregion

//#region App Model, Action, Selector
import * as AccountSelector from '@account/store/account.selectors';
import * as LoaderActions from '@loader/store/loader.actions';
//#endregion


@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {

  isLogged: boolean = false;

  constructor(private store: Store) { }

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
      .pipe(finalize(() => this.store.dispatch(LoaderActions.stopLoader())))
      // Dealing with error response
      .pipe(catchError(err => {

          this.store.select(AccountSelector.isLogged).subscribe(value => this.isLogged=value)

          // Handle HTTP Error - 'unauthorized' and 'forbidden'
          if ([401, 403].includes(err.status) && this.isLogged) {
            // Auto logout if 401 or 403 response returned from api
            // TODO -
            //this.accountService.logout();
          }

          const error = (err && err.error && err.error.message) || err.statusText;

          // TODO - Process the error coming from server
          //  > Error msg understandable for the user
          //  > Make the error go through the logging solution
          // this.log(`${operation} failed: ${error.message}`);
          console.error(err);

          return throwError(error);
    }))
  }
}
