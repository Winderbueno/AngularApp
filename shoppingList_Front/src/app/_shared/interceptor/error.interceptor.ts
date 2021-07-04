//#region Angular, Material, RxJS
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { AccountService } from '@app_account/service/account.service';
import { LoaderService } from '../loader/loader.service';
//#endregion


@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private accountService: AccountService,
    private loaderService: LoaderService) { }

  /**
   * Handle Http operation that failed then Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      // As the server answered, we stop the loader
      .pipe(finalize(() => this.loaderService.stopLoading()))
      // Dealing with error response
      .pipe(catchError(err => {

          // Handle HTTP Error - 'unauthorized' and 'forbidden'
          if ([401, 403].includes(err.status) && this.accountService.accountValue) {
            // Auto logout if 401 or 403 response returned from api
            this.accountService.logout();
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
