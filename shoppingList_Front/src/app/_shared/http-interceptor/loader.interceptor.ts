//#region Angular, Material, RxJS
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
//#endregion

//#region Model and Service
import { LoaderService } from '@app_shared/loader/loader.service';
//#endregion

// Api Info
import { envBusinessAPI } from '@env/environment';


@Injectable({ providedIn: 'root' })
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  /**
   * TODO - Handle Http operation that failed then Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      // Add auth header with jwt if user is logged in and request is to the api url
      const isApiUrl = request.url.startsWith(envBusinessAPI.apiUrl);
      this.loaderService.startLoading(request.url);

      return next.handle(request);
  }
}
