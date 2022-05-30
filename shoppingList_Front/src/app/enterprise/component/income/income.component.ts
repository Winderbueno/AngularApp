//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Module
import * as fromAlert from '@alert/store';
//#endregion


@Component({
  selector: 'income',
  templateUrl: './income.component.html'
})
export class IncomeComponent {
  formId = 'Income';
  alertTypeEnum = fromAlert.AlertTypeEnum;
  alertTypeEnumValues: string[] = Object.keys(fromAlert.AlertTypeEnum);
}
