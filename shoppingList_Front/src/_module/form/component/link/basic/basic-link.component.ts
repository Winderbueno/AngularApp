//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region This
import { LinkComponent } from '../link.component';
//#endregion

/**
 * Basic Link Component
 */
@Component({
  selector: 'k-link[uri]',
  templateUrl: 'basic-link.component.html'
})
export class BasicLinkComponent extends LinkComponent {}
