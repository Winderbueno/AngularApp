//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//#endregion

//#region Module
import * as fromAccount from '@account/store';
import { Account } from '@account/model/account.model';
//#endregion

// Api Info
import { envBusinessAPI } from '@env/environment';


@Injectable({ providedIn: 'root' })
// TODO - Replace By Meta Reducer
export class JwtInterceptor implements HttpInterceptor {

    account!: Account[];

    constructor(private store: Store) {
      this.store.select(fromAccount.selectAccounts)
        .subscribe(value => this.account=value);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // If user is logged and request is to the 'shoppingListApi', 
        // Add JWT auth header
        const isLoggedIn = this.account[0] && this.account[0].jwtToken;
        const isApiUrl = request.url.startsWith(envBusinessAPI.apiUrl);
        if (isLoggedIn && isApiUrl) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${this.account[0].jwtToken}`
            }
          });
        }

        return next.handle(request);
    }
}
