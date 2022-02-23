//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromStore from '../../../store/';
import * as fromLoader from '@loader/store/';
//#endregion


/**
 * Button Component
 *  
 *  @param buttonId (? | Default:"<text>")
 *  @param type - (? | Default:'submit') - Can be 'submit' | 'button'
 *  @param color - (? | Default:'primary') - Can be 'primary' | 'accent' | 'warn'
 *  @param label - (? | Default:'Submit') - Text inside the button
 */
@Component({
  selector: 'k-button',
  templateUrl: 'button.component.html',
  styles: ['button { width: 100%; }']
})
export class ButtonComponent {

  private _type: string = "submit";
  private _label: string = "Submit";

  @Input() buttonId: string = "defaultButtonId";
  @Input() 
  get type(): string { return this._type; }
  set type(input: string) {
    this._type = input;
    if (this._type === "button") this.color = ""; 
  }
  @Input() color: string = "primary";
  @Input() 
  get label(): string { return this._label; }  
  set label(input: string) {
    this._label = input;
    if (this.buttonId === "defaultButtonId") this.buttonId = input;
  }

  readonly isLoading$ = this.store.select(fromLoader.isLoading);

  constructor(private store: Store) {}

  throwAction(): void {
    this.store.dispatch(fromStore.buttonClickedAction({buttonId: this.buttonId }));
  }
}
