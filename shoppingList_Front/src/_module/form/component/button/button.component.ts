//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//#endregion

//#region Module
import * as fromLoader from '@loader/store/';
//#endregion


/**
 * Button Component
 *  @param text - (Default: "Submit") - Text of the submit button
 *  @param type - (Default: "submit") - Can be 'submit' | 'button'
 *  @param color - (Default: "primary") - Can be 'primary' | 'accent' | 'warn'
 */
@Component({
  selector: 'k-button',
  templateUrl: 'button.component.html' })
export class ButtonComponent {

  private _type: string = "submit";

  @Input() text: string = "Submit";
  @Input() 
  get type(): string { return this._type; }
  set type(input: string) {
    this._type = input;
    if (this._type === "button") this.color = ""; 
  }
  @Input() color: string = "primary";

  isLoading$:Observable<boolean> | undefined;

  constructor(
    private store: Store
  ) {
    this.isLoading$ = this.store.select(fromLoader.isLoading);
  }
}
