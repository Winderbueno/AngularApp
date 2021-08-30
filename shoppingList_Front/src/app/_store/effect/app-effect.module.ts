//#region Angular, Material, NgRx & NgRx
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region API Effect
import { AccountAPIEffects } from '@app_effect/api/account-api.effects';
import { ShoppingListAPIEffects } from '@app_effect/api/shopping-list-api.effects';
//#endregion


@NgModule({
  imports: [

    /* API Effect */
    EffectsModule.forFeature([
      AccountAPIEffects,
      ShoppingListAPIEffects
    ]),

  ],
  declarations: []
})
export class AppEffectsModule { }
