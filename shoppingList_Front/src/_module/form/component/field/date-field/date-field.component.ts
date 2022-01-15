//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { NgrxValueConverter } from 'ngrx-forms';
//#endregion

//#region Component, Model, Service
import { FieldComponent } from '@form/component/';
import { DateTime } from 'luxon';
//#endregion


/**
 * Date Field Component
 */
@Component({
  selector: 'app-date-field',
  templateUrl: 'date-field.component.html' })
export class DateFieldComponent extends FieldComponent {

  ngOnInit() { super.ngOnInit(); }

  dateValueConverter: NgrxValueConverter<DateTime | null, string | null> = {
    convertViewToStateValue(value) {
      
      if (value === null) { return null; }

      //let y:number = value.year;


      // the value provided by the date picker is in local time but we want UTC so we recreate the date as UTC
      // value = new Date(Date.UTC(
      //    value.year, 
      //    value.month, 
      //    value.day));
      return value.year.toString();
    },
    // tslint:disable-next-line: no-unbound-method
    convertStateToViewValue(value) {
      return null;
    }
  };
}
