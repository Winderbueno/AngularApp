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
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {

  readonly isOpenSideNav$: Observable<boolean> = this.store.select(fromStore.isOpenSideNav);

  constructor(private store: Store) {}

  @HostListener('window:storage', ['$event'])
  onStorage(event: any): void {
    if(event.key === 'account')
      this.store.dispatch(fromStore.accountWindowStorageChangeAction({ event: event }));
  }

  closeSideNav() {
    this.store.dispatch(fromStore.closeSideNavAction());
  }
}