//#region Angular & Material & NgRx
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
//#endregion

//#region API Effect
import { AccountAPIEffects } from '@app_effect/api/account-api.effects';
import { ShoppingListAPIEffects } from '@app_effect/api/shopping-list-api.effects';
//#endregion

//#region Technical Effect
import * as fromTimeOut from '@app_store/timeout/timeout.reducer';
import { AlertEffects } from '@app_effect/technical/alert.effects';
import { RouterEffects } from '@app_effect/technical/router.effects';
import { TimeOutEffects } from '../timeout/timeout.effects';
//#endregion


@NgModule({
  imports: [

    /* API Effect */
    EffectsModule.forFeature([
      AccountAPIEffects,
      ShoppingListAPIEffects
    ]),

    /* Technical Effect */
    EffectsModule.forFeature([
      AlertEffects,
      RouterEffects,
      TimeOutEffects
    ]),

    /* Store */
    // TODO -> SHoudl be somewhere else
    StoreModule.forFeature('timeout', fromTimeOut.reducer),

  ],
  declarations: []
})
export class AppEffectsModule { }
