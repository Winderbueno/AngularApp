//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
//#endregion

//#region NgRx
import { Store } from '@ngrx/store';
import * as LoaderActions from '@loader_store/loader.actions';
//#endregion


@Injectable({ providedIn: 'root' })
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private store: Store) { }

  /** TODO - Comment  Handle Http  */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      // Start loader
      this.store.dispatch(
        LoaderActions.startLoader({
          loaderTrigger: request.url.toString()
        })
      );

      return next.handle(request);
  }
}
