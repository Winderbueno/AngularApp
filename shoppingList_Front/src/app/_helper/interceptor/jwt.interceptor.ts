//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
//#endregion

//#region NgRx
import { Store } from '@ngrx/store';
//#endregion

//#region App Component, Model
import { Account } from '@app_model/account.model';
import * as AccountSelector from '@account_store/account.selectors';
//#endregion

// Api Info
import { envBusinessAPI } from '@env/environment';


@Injectable({ providedIn: 'root' })
// TODO - Replace By Meta Reducer
export class JwtInterceptor implements HttpInterceptor {

    account!: Account[];

    constructor(private store: Store) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Add auth header with jwt if user is logged in and request is to the api url
        this.store.select(AccountSelector.getAccounts).subscribe(value => this.account=value);


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
