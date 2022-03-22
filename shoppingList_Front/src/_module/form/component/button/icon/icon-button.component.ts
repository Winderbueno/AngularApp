//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Module
import { ButtonComponent } from '../button.component';
//#endregion


/**
 * Icon Button Component
 * 
 * Note : As this component does not contain text to convey meaning
 *  for accessibility purposes, 'aria-label' should be specified
 *  See: https://material.angular.io/components/icon/overview#interactive-icons
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
