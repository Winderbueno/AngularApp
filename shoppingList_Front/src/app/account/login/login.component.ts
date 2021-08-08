//#region Angular & Material
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//#endregion

//#region NgRx
import { Store } from '@ngrx/store';
import { AccountPagesActions }  from '@app_action/page/account.page.action';
//#endregion

//#region App Component, Model
import { FormComponent } from '@app_form/component/form.component';
import { AlertService } from '@app_alert/service/alert.service';
import { AccountService } from '@app_service/feature/account.service';
import { Account } from '@app_model/account.model';
//#endregion


@Component({ templateUrl: './login.component.html' })
export class LoginComponent extends FormComponent {

  constructor(
    router: Router,
    route: ActivatedRoute,
    alertService: AlertService,
    accountService: AccountService,
    private store: Store<{ shoppingList: Account }>
  ) {
    super(router, route, alertService, accountService);
  }


  ngOnInit(){
    super.title = "Sign In";
    super.ngOnInit();
  }

  submitAction(): void {

  }
}
