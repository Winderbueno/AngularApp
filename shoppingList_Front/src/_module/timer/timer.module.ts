//#region Angular, Material, NgRx
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
//#endregion

//#region Store
import * as fromTimer from '@timer/store/timer.reducer';
//#endregion

//#region Effect
import { TimerEffects } from '@timer/store/timer.effects';
//#endregion


@NgModule({
  imports: [
    /* Store */
    StoreModule.forFeature('timer', fromTimer.reducer),

    /* Effect */
    EffectsModule.forFeature([TimerEffects]),
  ],
  declarations: []
})
export class TimerModule { }
