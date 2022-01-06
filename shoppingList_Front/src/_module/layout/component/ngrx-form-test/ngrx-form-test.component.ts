//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Module
import { NgrxFormComponent } from '@module/ngrx-form/component/ngrx-form.component';
//#endregion


@Component({
  selector: 'app-ngrx-form-test',
  templateUrl: './ngrx-form-test.component.html'
})
export class NgrxFormTestComponent extends NgrxFormComponent {  

  ngOnInit(){    
    super.title = "TestNgrxForm";
    super.ngOnInit();
  }

  // TODO - Handle Submit Action
}
