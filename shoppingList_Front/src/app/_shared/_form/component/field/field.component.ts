//#region Angular, Material, RxJS
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn, Validators } from '@angular/forms';
//#endregion

//#region App Component, Model, Service
import { FormErrorService } from '@app_form/service/form-error.service';
//#endregion

/**
 * Field Component
 *  @param formMod - FormGroup to add the field control on
 */
@Component({
  selector: 'app-field',
  template: ``,
})
export class FieldComponent implements OnInit {

  // Input
  @Input() formMod!: FormGroup;
  @Input() ctrlName!: string;
  @Input() label!: string;
  @Input() required: boolean = true;

  _validators: ValidatorFn[] = new Array();
  _ctrl!: FormControl;

  // Accessor
  get err() { return this.formErrorService; }

  constructor(private formErrorService: FormErrorService) { }

  ngOnInit() {

    if(this.required === true) { this._validators.push(Validators.required); }

    this._ctrl = new FormControl('', this._validators)
    this.formMod.addControl(this.ctrlName, this._ctrl);
  }
}
