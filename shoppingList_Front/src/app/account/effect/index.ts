/* Effect */
export { AccountAPIEffects } from './account-api.effects';
import { AlertEffects } from './alert.effects';
import { AutoLogoutEffects } from './auto-logout.effects';
import { FormEffects } from './form.effects';
import { RouterEffects } from './router.effects';
import { TimerEffects } from './timer.effects';

export const Effects = [
  AlertEffects,
  AutoLogoutEffects,
  FormEffects,
  RouterEffects,
  TimerEffects
];

