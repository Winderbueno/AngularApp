//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region This
import * as Effect from './effect/';
import * as fromStore from './store/';
//#endregion


@NgModule({
  imports: [
    /* Store */
    StoreModule.forFeature(
      fromStore.featureKey, 
      fromStore.reducer
    ),

    /* Effect */
    EffectsModule.forFeature([
      Effect.EnumAPIEffects
    ]),
  ],
  declarations: []
})
export class EnumModule { }
