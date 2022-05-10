//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Module
import * as fromLoader from '@loader/store';
//#endregion


@Component({
  selector: 'demo-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent {
  startLoaderAction = fromLoader.startLoaderAction({triggerSource : '' });
  stopLoaderAction = fromLoader.stopLoaderAction();
}
