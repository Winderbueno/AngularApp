//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
//#endregion

//#region Module
import { LinkComponent } from '../link.component';
//#endregion


/**
 * Icon Link Component
 * 
 * Note : As this component does not contain text to convey meaning
 *  for accessibility purposes, 'aria-label' should be specified
 *  See: https://material.angular.io/components/icon/overview#interactive-icons
 */
@Component({
  selector: 'k-link-icon',
  templateUrl: 'icon-link.component.html'
})
export class IconLinkComponent extends LinkComponent {
  @Input() icon?: string;
}
