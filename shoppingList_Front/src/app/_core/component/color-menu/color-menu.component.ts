//#region Angular, Material, NgRx
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
//#endregion

//#region Model, Action
import { StyleLoaderService } from '../../service/style-loader.service';
//#endregion


@Component({
  selector: 'color-menu',
  templateUrl: './color-menu.component.html'
})
export class ColorMenuComponent {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private styleLoaderService: StyleLoaderService) {
  }

  changeTheme(theme:string): void {
    this.styleLoaderService.loadStyle(this.document, theme);
  }
}
