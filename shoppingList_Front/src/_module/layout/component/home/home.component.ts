//#region Angular, Material, NgRx
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromLoader from '@loader/store';
//#endregion


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {   

  constructor(public store: Store) {}

  ngOnInit(): void {}

  startLoader() { 
    this.store.dispatch(fromLoader.startLoaderAction({triggerSource : '' }));
  }

  stopLoader() { 
    this.store.dispatch(fromLoader.stopLoaderAction()); 
  }
}
