//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
//#endregion

//#region Module
import * as fromLoader from '@loader/store';
//#endregion

//#region This
import { ButtonComponent } from '../button.component';
//#endregion


/**
 * Basic Button Component
 *  Is a rectangle Button
 *  If type is set to 'submit' :
 *    > Style. 
 *      - color : primary,
 *      - raised : true
 *    > Content.
 *      - Loader (TODO - should be a specific loader)
 *      - When loading : button is disabled & loader indicator
 *    > Effect. 
 *      - form submit on click
 * 
 *  @param customClass? - Custom CSS class applied to the button (Useful for <mat-menu> integration for example)
 */
@Component({
  selector: 'k-button',
  templateUrl: 'basic-button.component.html',
  styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent extends ButtonComponent {

  @Input() customClass?: string;

  readonly isLoading$ = this.store.select(fromLoader.isLoading);

  ngOnInit(): void {

    // If 'submit' type, set default color
    if(this.type === 'submit') {
      if(this.color === undefined) { this.color = 'primary'; }
    }

    super.ngOnInit();
  }
}
