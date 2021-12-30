/* Particular Form for Login */
export interface LoginFormValue {
  username: string;
  password: string;
  stayLoggedIn: boolean;
}

/* Action DTO */
export interface DynamicObject {
  id: string;
  someNumber: number;
  someCheckbox: boolean;
}

/* Form Model */
export interface DynamicObjectFormValue {
  someNumber: number;
  someCheckbox: boolean;
}

export interface DynamicFormValue {
  [id: string]: DynamicObjectFormValue;
}
