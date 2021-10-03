//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromLoader from '@loader/store/';
//#endregion


/**
 * Submit Button Component
 *  @param text - Text present on the submit button (default : "Submit")
 */
@Component({
  selector: 'app-submit-button',
  templateUrl: 'submit-button.component.html' })
export class SubmitButtonComponent {

  @Input() text:string = "Submit";

  isLoading:boolean=false;

  constructor(
    private store: Store
  ) {
    this.store.select(fromLoader.isLoading).subscribe(value => this.isLoading=value);
  }

}
