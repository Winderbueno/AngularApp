//#region Angular & Material & NgRx
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region API Effect
import { AccountAPIEffects } from '@app/effect/api/account-api.effects';
import { ShoppingListAPIEffects } from '@app/effect/api/shopping-list-api.effects';
//#endregion

//#region Technical Effect
import { AlertEffects } from '@app/effect/technical/alert.effects';
import { RouterEffects } from '@app/effect/technical/router.effects';
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
      RouterEffects
    ]),
  ],
  declarations: []
})
export class AppEffectsModule { }
