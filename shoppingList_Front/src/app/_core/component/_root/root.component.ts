//#region Angular, Material, NgRx
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//#endregion

//#region Store
import { StyleLoaderService } from '../../service/style-loader.service';
import * as fromStore from '../../store/';
//#endregion

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html'
})
export class RootComponent implements OnInit {

  readonly isOpenSideNav$: Observable<boolean> = this.store.select(fromStore.isOpenSideNav);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private styleLoaderService: StyleLoaderService,
    private store: Store
  ) {}

  ngOnInit(): void {
      this.styleLoaderService.getCSSPkgNames(this.document);
  }

  closeSideNav() {
    this.store.dispatch(fromStore.closeSideNavAction());
  }
}