//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//#endregion

//#region Module
import * as fromAlert from '@alert/store';
//#endregion

//#region This
import * as fromStore from '../../../store';
//#endregion


@Component({
  selector: 'footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss']
})
export class FooterMobileComponent {
  readonly isOpenSideNav$: Observable<boolean> = this.store.select(fromStore.isOpenSideNav);
  readonly isAlerting$: Observable<boolean> = this.store.select(fromAlert.isAlerting);
  toggleSideNavAction = fromStore.toggleSideNavAction();
  constructor(private store: Store) {}
}
