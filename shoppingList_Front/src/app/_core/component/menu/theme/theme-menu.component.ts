//#region Angular, Material, NgRx
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
//#endregion

//#region Module
import { FormComponent } from '@form/component';
//#endregion

//#region Model, Action
import { StyleLoaderService } from '../../../service/style-loader.service';
import { MaterialThemeEnum } from '@material/enum/theme.enum'
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
//#endregion


@Component({
  selector: 'menu-theme',
  templateUrl: './theme-menu.component.html'
})
export class ThemeMenuComponent extends FormComponent {

  // Proposition values
  materialThemeEnum = MaterialThemeEnum;
  materialThemeEnumValues: string[] = Object.keys(MaterialThemeEnum);
  materialThemeEnumValueLabels: string[] = Object.values(MaterialThemeEnum);

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected store: Store,
    @Inject(DOCUMENT) private document: Document,
    private styleLoaderService: StyleLoaderService) {
    super(router, route, store);
  }

  ngOnInit(){
    super.formId = "Theme-Menu";
    super.persist = true;
    super.ngOnInit();
  }

  changeTheme(): void {
    this.styleLoaderService.loadStyle(
      this.document, 
      this.materialThemeEnumValueLabels[this.value.Theme as number]);
  }
}
