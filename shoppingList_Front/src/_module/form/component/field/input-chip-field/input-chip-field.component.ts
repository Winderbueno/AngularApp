//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Component, Model, Service
import { FieldComponent } from '@form/component';
import { SetValueAction } from 'ngrx-forms';
//#endregion


@Component({ 
  selector: 'k-form-field-input-chip',
  templateUrl: './input-chip-field.component.html',
  styleUrls: ['./input-chip-field.component.scss']
})
export class InputChipFieldComponent extends FieldComponent {

  onKeyDown(event: any) {
    // If 'delete' key
    if(event.keyCode === 8) {
      let val: string = this.ctrl.value.toString();
      let selStart: number = event.target.selectionStart;
      let selEnd: number = event.target.selectionEnd;
      let newVal: string = val;

      if(selStart === selEnd) {
        newVal=val.substring(0, selStart-1) + val.substring(selEnd, val.length);
      } else {
        newVal=val.substring(0, selStart) + val.substring(selEnd, val.length);
      }

      this.store.dispatch(new SetValueAction(
        this.formId + '.' + this.ctrlName, newVal
      ));
    }
  }
}