//#region Angular, Material, NgRx
import { Component, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//#endregion

//#region Store
import * as fromStore from '../../store';
//#endregion

@Component({
  selector: 'app-root',
  templateUrl: './home.page.html'
})
export class HomePage {

  readonly isOpenSideNav$: Observable<boolean> = this.store.select(fromStore.isOpenSideNav);

  constructor(private store: Store) {}

  @HostListener('window:focus', ['$event'])
  onFocus(event: any): void {
    this.store.dispatch(fromStore.windowFocusAction({ event: event }));
  }

  closeSideNav() {
    this.store.dispatch(fromStore.closeSideNavAction());
  }
}