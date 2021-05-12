//#region Angular and RxJS Module
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, finalize } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { Account } from '@app/_shared/model/account.model';
import { AccountService } from '@app/_shared/service/business/account.service';
//#endregion

// Api Info
import { environment } from '@env/environment';
const baseUrl = `${environment.apiUrl}/account`;


@Injectable({ providedIn: 'root' })
export class AccountAdminService {

  constructor(
    private http: HttpClient,
    private accountService: AccountService) { }

  /************************************************
   * Administration Methods
   ************************************************/

  getAll() {
    return this.http.get<Account[]>(baseUrl);
  }

  getById(id: string) {
      return this.http.get<Account>(`${baseUrl}/${id}`);
  }

  create(body: any) {
    return this.http.post(baseUrl, body);
  }

  update(id: string, body: any) {
      return this.http.put(`${baseUrl}/${id}`, body)
          .pipe(map((account: any) => {
              // Update logged in account if it was updated
              if (account.id === this.accountService.accountValue.id) {
                  this.accountService.updateAccount(account);
              }
              return account;
          }));
  }

  delete(id: string) {
      return this.http.delete(`${baseUrl}/${id}`)
          .pipe(finalize(() => {
              // Logout logged in account if it was deleted
              if (id === this.accountService.accountValue.id)
              this.accountService.logout();
          }));
  }
}
