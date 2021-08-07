//#region Angular & Material
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
//#endregion

//#region App Component, Model
import { LoaderService } from '@app_loader/service/loader.service';
//#endregion


@Injectable({ providedIn: 'root' })
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  /** TODO - Comment  Handle Http  */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      // Start loader
      this.loaderService.startLoading(request.url);
      return next.handle(request);
  }
}
