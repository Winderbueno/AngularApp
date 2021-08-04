import { createAction, props } from '@ngrx/store';

var actionType: string = "[Account Page] ";

export const login = createAction(
  actionType + 'Login',
  props<{ email:string, pwd:string }>()
);

export const register = createAction(
  actionType + 'Register',
  props<{ AccountId:string }>()
);

export const forgotPassword = createAction(
  actionType + 'Forgot Password',
  props<{ AccountId:string }>()
);

export const resetPassword = createAction(
  actionType + 'Reset Password',
  props<{ AccountId:string }>()
);

export const verifyEmail = createAction(
  actionType + 'Verify Email',
  props<{ AccountId:string }>()
);
