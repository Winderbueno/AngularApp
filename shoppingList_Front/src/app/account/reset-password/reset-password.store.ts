//#region NgRx
import { Injectable } from '@angular/core';
import { AccountService } from '@app/_service/account.service';
import { TokenStatusEnum } from '@app_model/enum/token-status.enum';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
//#endregion

//#region App Action
import * as AccountAPIActions from '@app_action/api/account.api.actions';
//#endregion

export interface ComponentState {
  tokenStatus: TokenStatusEnum,
  token: string | undefined;
}

@Injectable()
export class ResetPasswordStore extends ComponentStore<ComponentState> {

  constructor(private readonly accountService: AccountService) {
    super({
      tokenStatus: TokenStatusEnum.Validating,
      token: ''
    });
  }

  /* Selector */
  readonly token$: Observable<string | undefined> = this.select(state => state.token);
  readonly tokenStatus$: Observable<TokenStatusEnum> = this.select(state => state.tokenStatus);

  /* Updater */
  readonly setToken = this.updater((state, token: string | undefined) => ({ ...state, token: token }));
  readonly setTokenStatus = this.updater((state, tokenStatus: TokenStatusEnum) => ({ ...state, tokenStatus: tokenStatus }));


  // Validate Reset Token
  readonly validateResetToken = this.effect((token$: Observable<string|undefined>) => {
    return token$.pipe(
      switchMap((token) => this.accountService.validateResetToken(token).pipe(
        tap({
          next: () => this.setTokenStatus(TokenStatusEnum.Valid),
          error: () => this.setTokenStatus(TokenStatusEnum.Invalid)
        }),
        // Handle potential error within inner pipe.
        catchError(() => EMPTY),
      )),
      );
  });

}
