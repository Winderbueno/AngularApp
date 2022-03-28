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
  windowHeight = window.innerHeight;
  secondLastScrollY = 0;
  lastScrollY = 0;
  focused = false;
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
    /** 
     *  On small screen, on resize, manage footerVisibility
     *    - According to virtualKeyboardVisibility & focusedStatus
     * 
     *  Note : 'virtualKeyboardVisibility' is particularly deduced from 
     *      - windowHeight change (shortening -> show / extension -> hide)
     * 
     *    Though acceptable, this detection solution has some limitations :
     *      - If browser is in 'Pop-up view' and :
     *        > 'Resize is done manually', 
     *          this technique will deduce a 'keyboardVisibility' change
     *          although the actual visibility would not have been impacted 
     *        > 'Focus is given to an input' (hence the keyboard pop-up)
     *          'keyboardVisibility' will not be detected
     *      - In chrome browser, with auto-hide feature of chrome searchbar
     */
    if (this.mediaObserver.isActive('xs')) {
      if (this.focused && event.currentTarget.innerHeight < this.windowHeight) {
        this.lastResizeIsExtension = false;
        this.keyboardVisibleXs = true;
        this.footerVisibleXs = false;
        this.store.dispatch(fromAlert.dismissAlertAction());
      } else if (event.currentTarget.innerHeight >= this.windowHeight
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
    //  - secondLastScrollY test is used to avoid endless loop induced by
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