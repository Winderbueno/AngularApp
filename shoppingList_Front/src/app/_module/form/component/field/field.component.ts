//#region Angular & Material
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn, Validators } from '@angular/forms';
//#endregion

//#region App Component, Model
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

  // Control
  private _ctrl!: FormControl;
  private _ctrlName!: string;
  private _validators: ValidatorFn[] = new Array();

  // Input
  @Input() formMod!: FormGroup;
  @Input() set ctrlName(value: string) {
    this._ctrlName = value;
    if (this.label == null) this.label = value;
  }
  @Input() label!: string;
  @Input() required: boolean = true;

  // Accessor
  get ctrl() { return this._ctrl;}
  get ctrlName() { return this._ctrlName; }
  get err() { return this.formErrorService; }
  protected get validators() { return this._validators }

  constructor(private formErrorService: FormErrorService) { }

  ngOnInit() {

    if(this.required === true) { this._validators.push(Validators.required); }

    this._ctrl = new FormControl('', this._validators)
    this.formMod.addControl(this.ctrlName, this._ctrl);
  }
}
