//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Module
import { FormComponent } from '@module/ngrx-form/component/form.component';
//#endregion


@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html'
})
export class FormDemoComponent extends FormComponent {  

  ngOnInit(){    
    super.title = "TestNgrxForm";
    super.ngOnInit();
  }

  // TODO - Handle Submit Action
}
