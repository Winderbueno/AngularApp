//#region Angular, Material, NgRx
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
//#endregion

//#region This
import { buttonClickedAction } from '../../store';
import { ButtonType } from '../../model/button-type.enum';
//#endregion


/**
 * Button Component
 * 
 *  @param buttonId? - Button Identifier (Used in default 'buttonClickedAction')
 *  @param type - (Default:'button') - HTML button type (Can be 'submit' | 'button' | 'reset')
 *  @param color? - Can be 'primary' | 'accent' | 'warn'
 *  @param icon? - Icon Identifier (Implemented with : https://fonts.google.com/icons?icon.query=user)
 *  @param action? - (Default:'buttonClickedAction') - Ngrx action dispatched on click
 */
 @Component({ template: '' })
export class ButtonComponent implements OnInit {

  private _userSetAction = false;

  @Input() buttonId?: string;
  @Input() type: ButtonType = 'button';
  @Input() color?: string;
  @Input() icon?: string;
  @Input() action?: TypedAction<string>;

  constructor(protected store: Store) {}

  ngOnInit(): void {
    this.action === undefined ?
      this.action = buttonClickedAction({ buttonId: this.buttonId! })
      : this._userSetAction = true;
  }

  throwAction(): void {
    if(this.buttonId !== undefined || this._userSetAction) { 
      if(this.action !== undefined) { this.store.dispatch(this.action) }; 
    }
  }
}
