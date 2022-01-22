//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromLoader from '@loader/store';
//#endregion


@Component({
  selector: 'demo-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent {  

  constructor(public store: Store) {}

  startLoader() { 
    this.store.dispatch(fromLoader.startLoaderAction({triggerSource : '' }));
  }

  stopLoader() { 
    this.store.dispatch(fromLoader.stopLoaderAction()); 
  }  
}
