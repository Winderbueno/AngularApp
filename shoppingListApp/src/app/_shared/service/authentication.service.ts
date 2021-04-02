//#region Angular and RxJS Module
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { Account } from '../model/account.model';
//#endregion

// Api Info
import { environment } from '@env/environment';
const baseUrl = `${environment.apiUrl}/accounts`;


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  
    private accountSubject!: BehaviorSubject<Account>;
    public account!: Observable<Account>;

    constructor(
        private router: Router,
        private http: HttpClient) {
        
        let accountInLocStorage = localStorage.getItem('currentUser');

        if(accountInLocStorage){
            this.accountSubject = new BehaviorSubject<Account>(JSON.parse(accountInLocStorage));
        } else { // No Account logged in is a user with a '-1' id 
            this.accountSubject = new BehaviorSubject<Account>({ id:"null", jwtToken:"null" });
        }
        this.account = this.accountSubject.asObservable();
    }

    public get accountValue(): Account { return this.accountSubject.value; }

    login(email: string, password: string) {
        console.log('In \'authentServ\' : ' + email);
        return this.http.post<any>(`${baseUrl}/authenticate`, { email, password }, { withCredentials: true })
            .pipe(map(account => {
                // Store user details and jwt token in local storage
                // TODO - Necessary : ? localStorage.setItem('currentUser', JSON.stringify(user));
                this.accountSubject.next(account);
                this.startRefreshTokenTimer();
                return account;
            }));
    }

    logout() {
        this.http.post<any>(`${baseUrl}/revoke-token`, {}, { withCredentials: true }).subscribe();
        this.stopRefreshTokenTimer();

        // Replace user in local storage by a fake one
        // TODO - Necessary ? localStorage.removeItem('currentUser');

        this.accountSubject.next({ id:"null", jwtToken:"null" });
        this.router.navigate(['/account/login']);
    }

    register(account: Account) {
        return this.http.post(`${baseUrl}/register`, account);
    }

    verifyEmail(token: string) {
        return this.http.post(`${baseUrl}/verify-email`, { token });
    }
    
    forgotPassword(email: string) {
        return this.http.post(`${baseUrl}/forgot-password`, { email });
    }

    resetPassword(token: string, password: string, confirmPassword: string) {
        return this.http.post(`${baseUrl}/reset-password`, { token, password, confirmPassword });
    }

    refreshToken() {
        return this.http.post<any>(`${baseUrl}/refresh-token`, {}, { withCredentials: true })
            .pipe(map((account) => {
                this.accountSubject.next(account);
                this.startRefreshTokenTimer();
                return account;
            }));
    }
    
    validateResetToken(token: string) {
        return this.http.post(`${baseUrl}/validate-reset-token`, { token });
    }

    updateAccount(account:Account){
        // Publish updated account to subscribers after an update
        account = { ...this.accountValue, ...account };
        this.accountSubject.next(account);
    }

    /************************************************
     * Security Helpers
     ************************************************/

    private refreshTokenTimeout!: NodeJS.Timeout;

    private startRefreshTokenTimer() {
        
        if(this.accountValue.jwtToken){
            // Parse json object from base64 encoded jwt token
            const jwtToken = JSON.parse(atob(this.accountValue.jwtToken.split('.')[1]));
        
            // Set a timeout to refresh the token a minute before it expires
            const expires = new Date(jwtToken.exp * 1000);
            const timeout = expires.getTime() - Date.now() - (60 * 1000);
            this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
        }
    }
    
    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
  
}
