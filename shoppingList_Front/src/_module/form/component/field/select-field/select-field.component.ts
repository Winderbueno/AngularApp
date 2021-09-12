﻿//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
//#endregion

//#region App Component, Model
import { FieldComponent } from '@form/component/field/field.component';
import { Enum } from '@enum/model/enum.model'; // TODO - we use an external tech base
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