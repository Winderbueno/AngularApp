//#region Angular and RxJS Module
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//#endregion

//#region Model and Service
import { Account } from '../../model/account.model';
import { AuthenticationService } from '../../service/authentication.service';
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
    private authentService: AuthenticationService,
  ) { 
    // Subscribe to the connected user
    this.authentService.account.subscribe(x => this.loggedInAccount = x);
  }

  ngOnInit(): void {}

  logout() {
    this.authentService.logout();
    this.router.navigate(['/']);
  }

}
