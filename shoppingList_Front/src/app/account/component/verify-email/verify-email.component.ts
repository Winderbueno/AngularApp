//#region Angular, Material, NgRx
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//#endregion

//#region App Component, Model
import { TokenStore } from '@mod_store/component-store/token.store';
import { TokenStatusEnum } from "@app_enum/token-status.enum";
//#endregion


@Component({
  templateUrl: 'verify-email.component.html',
  providers: [TokenStore],
})
export class VerifyEmailComponent implements OnInit {

  TokenStatusEnum = TokenStatusEnum;
  tokenStatus = this.tokenStore.tokenStatus$;
  token = this.tokenStore.token$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly tokenStore: TokenStore,
  ) { }

  ngOnInit() {

    const token = this.route.snapshot.queryParams['token']
    this.tokenStore.setToken(token);

    // Remove token from url to prevent http referer leakage
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

    // Call Backend to Verify Email Token
    this.tokenStore.verifyEmail(token);
  }
}
