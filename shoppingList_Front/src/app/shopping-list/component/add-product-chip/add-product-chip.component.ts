//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Component, Model, Service
import { FieldComponent } from '@form/component';
import { SetValueAction } from 'ngrx-forms';
import * as Actions from './add-product-chip.actions';
//#endregion


@Component({ 
  selector: 'add-product-chip',
  templateUrl: './add-product-chip.component.html',
  styleUrls: ['./add-product-chip.component.scss']
})
export class AddProductChipComponent extends FieldComponent {

  onKeyDown(event: any) {

    switch (event.keyCode) {
      case 8: { this.onDeleteKeyDown(event); break; }
      case 13: { this.onEnterKeyDown(event); break; }
    }
  }

  onDeleteKeyDown(event: any) {
    let val: string = this.ctrl.value.toString();
    let selStart: number = event.target.selectionStart;
    let selEnd: number = event.target.selectionEnd;
    let newVal: string = val;
    let endFirstPart: number;

    selStart === selEnd ? endFirstPart=selStart - 1: endFirstPart=selStart;
    newVal = val.substring(0, endFirstPart) + val.substring(selEnd, val.length);

    this.store.dispatch(new SetValueAction(
      this.formId + '.' + this.ctrlName, newVal
    ));
  }

  onEnterKeyDown(event: any) {
    this.store.dispatch(Actions.submitAddProductChipAction({
      shoppingListId: '1',
      controlId: this.ctrl.id,
      controlValue: this.ctrl.value as string
    }));
  }
}