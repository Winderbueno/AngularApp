//#region Angular, Material, RxJS
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
//#endregion

//#region Model and Service
//#endregion


@Injectable({ providedIn: 'root' })
export class FormErrorService {

  // Generate form error message
  getErrorMsg(formCtrl: AbstractControl, ctrlName: string): string {

    let errMsg = '';

    if (formCtrl.hasError('required')) {
      errMsg += 'Please fill in your ';
      switch (ctrlName) {
        case 'username': {
          errMsg += 'username';
          break;
        }
        case 'email': {
          errMsg += 'email adress';
          break;
        }
        case 'password': {
          errMsg += 'password';
          break;
        }
        case 'confirmPassword': {
          errMsg += 'password';
          break;
        }
        default: {
          break;
        }
      }
    } else if (formCtrl.hasError('email')) {
      errMsg = 'Filled email has not the good format';
    } else if (formCtrl.hasError('mustMatch')) {
      errMsg = 'Passwords should be the same';
    }

    return errMsg;
  }
}
