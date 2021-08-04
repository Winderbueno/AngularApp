//#region Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//#endregion

//#region App Component, Model
import { Account } from '@app_model/account.model';
//#endregion

// Api Info
import { envBusinessAPI } from '@env/environment';
const baseUrl = `${envBusinessAPI.apiUrl}/account`;


@Injectable({ providedIn: 'root' })
export class AccountService {

  private _accountSubject!: BehaviorSubject<Account>;
  public account$!: Observable<Account>;

  constructor(
    private router: Router,
    private http: HttpClient) {

    // No Account logged in is a user with a '-1' id } */
    this._accountSubject = new BehaviorSubject<Account>({ id: "null", jwtToken: "null" });
    this.account$ = this._accountSubject.asObservable();
  }

  public get accountValue(): Account { return this._accountSubject.value; }

  login(email: string, password: string) {
    return this.http.post<any>(`${baseUrl}/authenticate`, { email, password }, { withCredentials: true })
      .pipe(map(account => {
        // Store account info and jwt token in account Subject
        this._accountSubject.next(account);
        this.startRefreshTokenTimer();
        return account;
      }));
  }

  logout() {
    this.http.post<any>(`${baseUrl}/revoke-token`, {}, { withCredentials: true }).subscribe();
    this.stopRefreshTokenTimer();

    // Replace account by a fake one
    this._accountSubject.next({ id: "null", jwtToken: "null" });
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
        this._accountSubject.next(account);
        this.startRefreshTokenTimer();
        return account;
      }));
  }

  validateResetToken(token: string) {
    return this.http.post(`${baseUrl}/validate-reset-token`, { token });
  }

  updateAccount(account: Account) {
    // Publish updated account to subscribers after an update
    account = { ...this.accountValue, ...account };
    this._accountSubject.next(account);
  }

  /************************************************
   * Security Helpers
   ************************************************/

  private refreshTokenTimeout!: NodeJS.Timeout;

  private startRefreshTokenTimer() {

    if (this.accountValue.jwtToken) {
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
