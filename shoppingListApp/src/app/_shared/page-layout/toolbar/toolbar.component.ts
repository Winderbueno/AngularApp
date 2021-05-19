//#region Angular and RxJS Module
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//#endregion

//#region Model and Service
import { Account } from '@app_auth/model/account.model';
import { AccountService } from '@app_auth/service/account.service';
//#endregion

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  loggedInAccount!: Account;

  constructor(
    private router: Router,
    private accountService: AccountService,
  ) { 
    // Subscribe to the connected user
    this.accountService.account.subscribe(x => this.loggedInAccount = x);
  }

  ngOnInit(): void {}

  logout() {
    this.accountService.logout();
    this.router.navigate(['/']);
  }

}
