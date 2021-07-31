//#region Angular, Material, RxJS
import { Component, Input } from '@angular/core';
//#endregion

//#region App Component, Model, Service
import { FieldComponent } from '../field.component';
import { Enum } from '@app_enum/enum.model';
//#endregion


/**
 * Select Field Component
 *  @param enum - Values proposed in the select field
 */
@Component({
  selector: 'app-select-field',
  templateUrl: 'select-field.component.html' })
export class SelectFieldComponent extends FieldComponent {

  @Input() enum!: Enum;
}
