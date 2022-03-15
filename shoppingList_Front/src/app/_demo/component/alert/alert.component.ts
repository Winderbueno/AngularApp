//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Module
import * as fromAlert from '@alert/store';
//#endregion


@Component({
  selector: 'demo-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {
  formId:string = "Alert";
  alertTypeEnum = fromAlert.AlertTypeEnum;
  alertTypeEnumValues: string[] = Object.keys(fromAlert.AlertTypeEnum);
}
