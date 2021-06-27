//#region Angular, Material, RxJS
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { AccountService } from '@app_account/service/account.service';
//#endregion


@Injectable({ providedIn: 'root' })
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) { }

  /**
   * TODO - Handle Http operation that failed then Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        catchError(err => {
          if ([401, 403].includes(err.status) && this.accountService.accountValue) {
            // Auto logout if 401 or 403 response returned from api
            this.accountService.logout();
          }

          const error = (err && err.error && err.error.message) || err.statusText;

          // TODO - Better job of transforming error for user consumption
          //this.log(`${operation} failed: ${error.message}`);

          // TODO - Send the error to remote logging infrastructure
          console.error(err);

          return throwError(error);
    }))
  }
}
