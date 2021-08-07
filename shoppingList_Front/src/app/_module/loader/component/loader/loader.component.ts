//#region Angular & Material
import { Component } from '@angular/core';
//#endregion

//#region App Component, Model
import { LoaderService } from '@app_loader/service/loader.service';
//#endregion


/**
 * Loader Component
 */
@Component({
  selector: 'app-loader',
  templateUrl: 'loader.component.html' })
export class LoaderComponent {

  get isLoading() { return this.loaderService.loading;}

  constructor(private loaderService: LoaderService) { }
}
