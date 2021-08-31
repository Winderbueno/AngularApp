//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//#endregion

//#region App Component, Model
import { Account } from '@app_model/account.model';
//#endregion

// Api Info
import { envBusinessAPI } from '@env/environment';
const baseUrl = `${envBusinessAPI.apiUrl}/account`;


@Injectable({ providedIn: 'root' })
export class AccountService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<any>(`${baseUrl}/authenticate`, { email, password }, { withCredentials: true });
  }

  logout() {
    return this.http.post<any>(`${baseUrl}/revoke-token`, {}, { withCredentials: true });
  }

  register(account: Account) {
    return this.http.post(`${baseUrl}/register`, account);
  }

  verifyEmail(token: string | undefined) {
    return this.http.post(`${baseUrl}/verify-email`, { token });
  }

  forgotPassword(email: string) {
    return this.http.post(`${baseUrl}/forgot-password`, { email });
  }

  resetPassword(token: string | undefined, password: string, confirmPassword: string) {
    return this.http.post(`${baseUrl}/reset-password`, { token, password, confirmPassword });
  }

  refreshToken() {
    return this.http.post<any>(`${baseUrl}/refresh-token`, {}, { withCredentials: true });
  }

  validateResetToken(token: string | undefined) {
    return this.http.post(`${baseUrl}/validate-reset-token`, { token });
  }
}
