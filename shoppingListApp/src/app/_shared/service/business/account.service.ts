//#region Angular and RxJS Module
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, finalize } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { Account } from '../../model/account.model';
import { AuthenticationService } from '@app/_shared/service/authentication.service';
//#endregion

// Api Info
import { environment } from '@env/environment';
const baseUrl = `${environment.apiUrl}/account`;


@Injectable({ providedIn: 'root' })
export class AccountService {

  constructor(
    private http: HttpClient,
    private authentService: AuthenticationService) { }

  /************************************************
   * Administration Methods
   ************************************************/

  getAll() {
    return this.http.get<Account[]>(baseUrl);
  }

  getById(id: string) {
      return this.http.get<Account>(`${baseUrl}/${id}`);
  }

  create(params: any) {
    return this.http.post(baseUrl, params);
  }

  update(id: string, params: any) {
      return this.http.put(`${baseUrl}/${id}`, params)
          .pipe(map((account: any) => {
              // Update logged in account if it was updated
              if (account.id === this.authentService.accountValue.id) {
                  this.authentService.updateAccount(account);
              }
              return account;
          }));
  }

  delete(id: string) {
      return this.http.delete(`${baseUrl}/${id}`)
          .pipe(finalize(() => {
              // Logout logged in account if it was deleted
              if (id === this.authentService.accountValue.id)
              this.authentService.logout();
          }));
  }
}
