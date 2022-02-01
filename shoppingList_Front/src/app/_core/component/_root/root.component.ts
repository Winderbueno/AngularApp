//#region Angular, Material, NgRx
import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//#endregion

//#region Store
import * as fromStore from '../../store/';
//#endregion

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html'
})
export class RootComponent {

  readonly isOpenSideNav$: Observable<boolean> = this.store.select(fromStore.isOpenSideNav);

  constructor(private store: Store) {}

  closeSideNav() {
    this.store.dispatch(fromStore.closeSideNavAction());
  }
}