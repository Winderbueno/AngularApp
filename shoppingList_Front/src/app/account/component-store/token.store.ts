//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
//#endregion

//#region App Model, Action, Selector
import { TokenStatusEnum } from '@account/model/enum/token-status.enum';
import { AccountService } from '@account/service/account.service';
import * as AccountAPIActions from '@account/store/action/account.api.actions';
//#endregion

export interface ComponentState {
  tokenStatus: TokenStatusEnum,
  token: string | undefined;
}

@Injectable()
export class TokenStore extends ComponentStore<ComponentState> {

  constructor(
    private readonly accountService: AccountService,
    protected store: Store) {
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

  // Validate Mail Token
  readonly verifyEmail = this.effect((token$: Observable<string|undefined>) => {
    return token$.pipe(
      switchMap((token) => this.accountService.verifyEmail(token).pipe(
        tap({
          next: () => {
            this.setTokenStatus(TokenStatusEnum.Valid); // TODO Message to standardize
            this.store.dispatch(AccountAPIActions.verifyEmailSuccess({ message: 'Verification successful, you can now login' }));
          },
          error: (error) => {
            this.setTokenStatus(TokenStatusEnum.Invalid);
            this.store.dispatch(AccountAPIActions.verifyEmailFailure({ error: error }));
          }
        }),
        // Handle potential error within inner pipe.
        catchError(() => EMPTY),
      )),
      );
  });

}
