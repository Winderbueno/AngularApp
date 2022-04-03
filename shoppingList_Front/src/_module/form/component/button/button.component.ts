//#region Angular, Material, NgRx
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
//#endregion

//#region Module
import * as fromStore from '../../store';
//#endregion


/**
 * Button Component
 *  
 *  @param buttonId? (Default:"<label>")
 *  @param type? - (Default:'submit') - HTML button type (Can be 'submit' | 'button')
 *  @param icon? - <mat-icon> string identifier (See: https://fonts.google.com/icons?icon.query=user)
 *  @param color? - (Default:'primary') - Can be 'primary' | 'accent' | 'warn'
 *  @param action? - (Default:'buttonClickedAction') - ngrx action dispatched on click
 */
 @Component({ template: '' })
export class ButtonComponent implements OnInit {

  private _actionSetByUser = false;

  @Input() buttonId?: string;
  @Input() type?: string;
  @Input() icon?: string;
  @Input() color?: string;
  @Input() action?: TypedAction<string>;

  constructor(protected store: Store) {}

  ngOnInit(): void {
    this.action === undefined ?
      this.action = fromStore.buttonClickedAction({ buttonId: this.buttonId! })
      : this._actionSetByUser = true;
  }

  throwAction(): void {
    if(this.buttonId !== undefined || this._actionSetByUser) { 
      if(this.action !== undefined) { this.store.dispatch(this.action) }; 
    }
  }
}
