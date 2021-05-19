//#region Angular and RxJS Module
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
      errMsg += 'Veuillez saisir votre ';
      switch (ctrlName) {
        case 'username': {
          errMsg += 'nom d\'utilisateur';
          break;
        }
        case 'email': {
          errMsg += 'adresse email';
          break;
        }
        case 'password': {
          errMsg += 'mot de passe';
          break;
        }
        case 'confirmPassword': {
          errMsg += 'mot de passe';
          break;
        }
        default: {
          break;
        }
      }
    } else if (formCtrl.hasError('email')) {
      errMsg = 'L\'email saisi n\'est pas au bon format';
    } else if (formCtrl.hasError('mustMatch')) {
      errMsg = 'Les mots de passe doivent être les mêmes';
    }

    return errMsg;
  }
}
