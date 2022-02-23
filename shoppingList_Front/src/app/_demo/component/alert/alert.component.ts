//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Module
import { FormComponent } from '@form/component';
import * as fromAlert from '@alert/store/';
//#endregion


@Component({
  selector: 'demo-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent extends FormComponent {  

  // Proposition values
  alertTypeEnum = fromAlert.AlertTypeEnum;
  alertTypeEnumValues: string[] = Object.keys(fromAlert.AlertTypeEnum);

  ngOnInit(){
    super.formId = "Alert";
    super.ngOnInit();
  }
}
