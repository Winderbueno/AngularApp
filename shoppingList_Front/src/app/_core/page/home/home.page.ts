//#region Angular, Material, NgRx
import { Component, HostListener } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
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
  footerHideXs = false;
  isKeyboardVisible = false;
  windowHeight = window.innerHeight;

  constructor(
    private store: Store,
    private readonly mediaObserver: MediaObserver
  ) {}

  @HostListener('window:storage', ['$event'])
  onStorage(event: any): void {
    if (event.key === 'account')
      this.store.dispatch(fromStore.accountWindowStorageChangeAction({ event: event }));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    // On small screen, 
    //  -> 'hide/show' footer when windowHeight is 'shortened/extended'
    //  <=> which realistically means that a virtual keyboard where shown/hidden
    // Notable Exception :
    //   - If browser is in a pop-up view and resize is done manually
    //   - In chrome browser with auto-hide feature of chrome searchbar
    // Though unperfect, this solution is acceptable 
    if(this.mediaObserver.isActive('xs')){
      (event.currentTarget.innerHeight < this.windowHeight) ?
        this.isKeyboardVisible = true :
        this.isKeyboardVisible = false;

      this.isKeyboardVisible ? 
        this.footerHideXs = true :
        this.footerHideXs = false;
    }
  }  

  closeSideNav() {
    this.store.dispatch(fromStore.closeSideNavAction());
  }
}