//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Module
import { MaterialThemeEnum } from '@material/model/theme.enum';
//#endregion


@Component({
  selector: 'menu-theme',
  templateUrl: './theme-menu.component.html'
})
export class ThemeMenuComponent {
  materialThemeEnumKeys: string[] = Object.keys(MaterialThemeEnum);
}
