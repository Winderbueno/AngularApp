//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Module
import { NgrxValueConverter } from 'ngrx-forms';
import { DateTime } from 'luxon';
//#endregion

//#region This
import { FieldComponent } from '../field.component';
//#endregion


/**
 * Date Field Component
 */
@Component({
  selector: 'k-form-field-date[ctrlName]',
  templateUrl: 'date-field.component.html'
})
export class DateFieldComponent extends FieldComponent {

  touchUi:boolean = false;

  // Converters 'Luxon DateTime' (In DatePicker) <=> 'String' (In Ngrx State)
  dateValueConverter: NgrxValueConverter<DateTime | null, string | null> = {
    convertViewToStateValue(dateInView:DateTime) {
      return dateInView === null ? null : dateInView.toISODate();
    },
    convertStateToViewValue(dateInState:string) {
      return DateTime.fromISO(dateInState);
    }
  };
}
