//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
//#endregion


@Component({
  selector: 'app-logo',
  templateUrl: './app-logo.component.html'
})
export class AppLogoComponent {
  @Input() width: number = 45;
  constructor() {}
}
