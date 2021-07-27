//#region Angular, Material, RxJS
import { Component, Input } from '@angular/core';
//#endregion

//#region App Component, Model, Service
import { LoaderService } from '@app_loader/loader.service';
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

  get isLoading() { return this.loaderService.loading;}

  constructor(private loaderService: LoaderService) { }
}
