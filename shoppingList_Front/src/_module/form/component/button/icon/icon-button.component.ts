//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Module
import { ButtonComponent } from '../button.component';
//#endregion


/**
 * Icon Button Component
 */
@Component({
  selector: 'k-button-icon',
  templateUrl: 'icon-button.component.html'
})
export class IconButtonComponent extends ButtonComponent {
  ngOnInit(): void {
    if(this.type === undefined) { this.type = 'button'; }
    super.ngOnInit();    
  }
}
