//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { TypedAction } from '@ngrx/store/src/models';
import { Observable } from 'rxjs';
//#endregion

//#region Module
import { FormComponent } from '@module/ngrx-form/component/form.component';
import { Enum } from '@enum/model/enum.model';
import * as fromEnum from '@enum/store/';
import * as fromAlert from '@alert/store/';
//#endregion


@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html'
})
export class FormDemoComponent extends FormComponent {  

  // Proposition values
  productCatEnum$!: Observable<Enum|undefined>;

  ngOnInit(){
    this.productCatEnum$ = this.store.select(fromEnum.selectEnumByName('ProductCategory'));
    super.title = "Form Demo";
    super.ngOnInit();
  }

  submitAction(): TypedAction<string> {
    return fromAlert.triggerAlertAction({
      alertType: fromAlert.AlertTypeEnum.Info,
      message: "Form has been submitted !",
      keepAfterRouteChange: false
    });
  }
}
