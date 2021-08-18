//#region Angular & Material
import { NgModule } from '@angular/core';
//#endregion

//#region NgRx Module
import { EffectsModule } from '@ngrx/effects';

//#region Effects
import { AccountAPIEffects } from '@app_effect/api/account.effects';
import { AlertEffects } from '@app_effect/alert.effects';
import { RouterEffects } from './router.effects';
//#endregion


@NgModule({
  imports: [
    /* Account Feature */
    EffectsModule.forFeature([
      AccountAPIEffects,
    ]),

    EffectsModule.forFeature([
      AlertEffects, RouterEffects]),
  ],
  declarations: []
})
export class AppEffectsModule { }
