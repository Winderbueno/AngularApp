//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromStore from '../../store/';
//#endregion


@Component({
  selector: 'footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss']
})
export class FooterMobileComponent {
  constructor(private store: Store) {}

  toggleSideNav() {
    this.store.dispatch(fromStore.toggleSideNavAction());
  }
}
