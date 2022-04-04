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
 *  Is a configurable rectangle Button
 *  By default, it has a "submit" standardisation :
 *    > Effect : form submit on click
 *    > Style (color:primary, raised:true)
 *    > Content 
 *      - (label:'Submit')
 *      - Loader (TODO - should be a specific loader)
 *      - When loading : button is disabled & loader indicator
 * 
 *  @param label? - (Default:'Submit', if type is default) - Text inside the button
 *  @param customClass? - Custom CSS class applied to the button (Useful for <mat-menu> integration for example)
 */
@Component({
  selector: 'k-button',
  templateUrl: 'basic-button.component.html',
  styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent extends ButtonComponent {

  @Input() label?: string;
  @Input() customClass?: string;

  readonly isLoading$ = this.store.select(fromLoader.isLoading);

  ngOnInit(): void {

    // Set submit type by default
    if(this.type === undefined) {
      this.type = 'submit';
      this.color = 'primary';    
    }
    
    if(this.type === 'submit' && this.label === undefined) { this.label = 'Submit'; }
    
    if(this.label && !this.buttonId) { this.buttonId = this.label; }

    super.ngOnInit();
  }
}
