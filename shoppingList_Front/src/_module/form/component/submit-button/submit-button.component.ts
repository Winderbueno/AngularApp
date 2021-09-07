//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region App Model, Action, Selector
import * as LoaderSelector from '@loader/store/loader.selectors';
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
    this.store.select(LoaderSelector.isLoading).subscribe(value => this.isLoading=value);
  }

}
