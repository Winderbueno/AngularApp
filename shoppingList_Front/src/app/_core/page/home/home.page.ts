//#region Angular, Material, NgRx
import { Component, HostListener } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//#endregion

//#region Module
import * as fromAlert from '@alert/store';
//#endregion

//#region This
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
  lastWindowHeight = window.innerHeight;
  lastScrollY = 0;
  secondLastScrollY = 0;
  lastResizeIsExtension = true;

  constructor(
    private store: Store,
    private readonly mediaObserver: MediaObserver
  ) { }

  @HostListener('window:storage', ['$event'])
  onStorage(event: any): void {
    if (event.key === 'account')
      this.store.dispatch(fromStore.accountWindowStorageChangeAction({ event: event }));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    /** 
     *  On small screen, on virtualKeyboardVisibility change, manage footerVisibility
     * 
     *  Note : 'virtualKeyboardVisibility' is deduced from windowHeight change on resize
     *    (shortening -> show / extension -> hide)
     * 
     *  Though functionnal in most cases, this detection solution has some limitations :
     *    - If browser is in 'Pop-up' or 'Split Screen' view, and :
     *      > 'Resize is done manually', 
     *        this technique will deduce a 'keyboardVisibility' change
     *        although the actual visibility would not have been impacted 
     *      > 'Focus is given to an input' (hence the keyboard pop-up)
     *        'keyboardVisibility' might not be detected
     */
    if (this.mediaObserver.isActive('xs')) {
      if (event.currentTarget.innerHeight < this.lastWindowHeight) {
        this.lastResizeIsExtension = false;
        this.keyboardVisibleXs = true;
        this.footerVisibleXs = false;
        this.store.dispatch(fromAlert.dismissAlertAction());
      } else if (event.currentTarget.innerHeight >= this.lastWindowHeight
        && this.keyboardVisibleXs) {
        if (this.lastResizeIsExtension === false) { this.footerVisibleXs = true; }
        this.lastResizeIsExtension = true;
        this.keyboardVisibleXs = false;
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    // On small screen, on scroll, manage footerVisibility
    //  - scrolling impact footerVisibility only when virtualKeyboard is hidden
    //  - secondLastScrollY test avoid endless loop induced by
    //      scrolling event resulting of changing footerVisibility
    if (this.mediaObserver.isActive('xs')
      && !this.keyboardVisibleXs
      && event.currentTarget.scrollY !== this.secondLastScrollY) {

      event.currentTarget.scrollY > this.lastScrollY ?
        this.footerVisibleXs = false :
        this.footerVisibleXs = true;

      this.secondLastScrollY = this.lastScrollY;
      this.lastScrollY = event.currentTarget.scrollY;
    }
  }

  closeSideNav() {
    this.store.dispatch(fromStore.closeSideNavAction());
  }
}