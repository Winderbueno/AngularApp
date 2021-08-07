//#region Angular & Material
import { Component, Input } from '@angular/core';
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

}
