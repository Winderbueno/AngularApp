//#region Angular, Material, NgRx & NgRx
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
//#endregion

//#region Technical Effect
import * as fromToken from '@token/store/token.reducer';
import { TokenEffects } from '@token/store/token.effects';
//#endregion


@NgModule({
  imports: [

    /* Effect */
    EffectsModule.forFeature([TokenEffects]),

    /* Store */
    StoreModule.forFeature('token', fromToken.reducer),

  ],
  declarations: []
})
export class TokenModule { }
