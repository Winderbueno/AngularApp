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
  footerVisibleXs = true;
  keyboardVisibleXs = false;
  windowHeight = window.innerHeight;
  lastScrollY = 0;
  focused = false;

  constructor(
    private store: Store,
    private readonly mediaObserver: MediaObserver
  ) {}

  @HostListener('window:storage', ['$event'])
  onStorage(event: any): void {
    if (event.key === 'account')
      this.store.dispatch(fromStore.accountWindowStorageChangeAction({ event: event }));
  }

  @HostListener('focusin', ['$event'])
  onFocusIn(): void {
    this.focused = true;
  }

  @HostListener('focusout', ['$event'])
  onFocusOut(): void {
    this.focused = false;
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
    if(this.mediaObserver.isActive('xs') && this.focused){

      // Get keyboard visibility
      event.currentTarget.innerHeight < this.windowHeight ?
        this.keyboardVisibleXs = true :
        this.keyboardVisibleXs = false;

      // Manage
      this.keyboardVisibleXs ? 
        this.footerVisibleXs = false :
        this.footerVisibleXs = true;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    // On small screen, if unfocused -> 'hide/show' footer when scrolling
    if(this.mediaObserver.isActive('xs') && !this.focused){
      event.currentTarget.scrollY > this.lastScrollY ?
        this.footerVisibleXs = false :
        this.footerVisibleXs = true;
      
      this.lastScrollY = event.currentTarget.scrollY;
    }
  }

  closeSideNav() {
    this.store.dispatch(fromStore.closeSideNavAction());
  }
}