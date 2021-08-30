//#region Angular, Material, NgRx & NgRx
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
//#endregion

//#region Technical Effect
import * as fromTimer from '@timer_store/timer.reducer';
import { TimerEffects } from '@timer_store/timer.effects';
//#endregion


@NgModule({
  imports: [

    /* Technical Effect */
    EffectsModule.forFeature([TimerEffects]),

    /* Store */
    // TODO -> SHoudl be somewhere else
    StoreModule.forFeature('timer', fromTimer.reducer),

  ],
  declarations: []
})
export class TimerModule { }
