//#region Angular & Material
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//#endregion

//#region App Component, Model
import { AccountService } from '@app_service_feat/account.service';
//#endregion

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  // Accessor // TODO - Use NgRxStore
  get account() { return this.accountService.accountValue; }

  constructor(
    private router: Router,
    private accountService: AccountService,
  ) {}

  ngOnInit(): void {}

  logout() {
    this.accountService.logout();
    this.router.navigate(['/']);
  }

}
