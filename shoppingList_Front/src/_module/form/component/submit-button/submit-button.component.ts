//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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

  isLoading$:Observable<boolean> | undefined;

  constructor(
    private store: Store
  ) {
    this.isLoading$ = this.store.select(fromLoader.isLoading);
  }

}
