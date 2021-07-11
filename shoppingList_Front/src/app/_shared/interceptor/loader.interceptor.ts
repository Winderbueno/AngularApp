//#region Angular, Material, RxJS
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
//#endregion

//#region App Component, Model, Service
import { LoaderService } from '@app_shared/loader/loader.service';
//#endregion

// Api Info
import { envBusinessAPI } from '@env/environment';


@Injectable({ providedIn: 'root' })
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  /** TODO - Handle Http  */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      // Start loader
      this.loaderService.startLoading(request.url);
      return next.handle(request);
  }
}
