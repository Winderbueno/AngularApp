//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Module
import { LinkComponent } from '../link.component';
//#endregion


/**
 * Icon Link Component 
 */
@Component({
  selector: 'k-link-router',
  templateUrl: 'router-link.component.html',
  styles: ['a { width: 100%; }']
})
export class RouterLinkComponent extends LinkComponent {}
