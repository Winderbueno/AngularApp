//#region Angular & Material
import { Component, Input } from '@angular/core';
//#endregion

//#region NgRx
import { Store } from '@ngrx/store';
import * as LoaderSelector from '@loader_store/loader.selectors';
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
