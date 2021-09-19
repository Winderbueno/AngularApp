//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region Store
import * as fromToken from '@token/store/token.reducer';
//#endregion

//#region Store
import { TokenEffects } from '@token/store/token.effects';
//#endregion


@NgModule({
  imports: [
    /* Store */
    StoreModule.forFeature('token', fromToken.reducer),

    /* Effect */
    EffectsModule.forFeature([TokenEffects]),
  ],
  declarations: []
})
export class TokenModule { }
