//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region Store
import * as fromToken from './store/token.reducer';
//#endregion

//#region Effect
import { TokenEffects } from './effect/token.effects';
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
