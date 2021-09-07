//#region Angular, Material, NgRx & NgRx
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
//#endregion

//#region Technical Effect
import * as fromTimer from '@timer/store/timer.reducer';
import { TimerEffects } from '@timer/store/timer.effects';
//#endregion


@NgModule({
  imports: [

    /* Effect */
    EffectsModule.forFeature([TimerEffects]),

    /* Store */
    StoreModule.forFeature('timer', fromTimer.reducer),

  ],
  declarations: []
})
export class TimerModule { }
