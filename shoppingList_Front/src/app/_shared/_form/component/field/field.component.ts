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
  @Input() label: string = "Label";
  @Input() required: boolean = true;

  // Control
  private _ctrl!: FormControl;
  private _validators: ValidatorFn[] = new Array();

  // Accessor
  get ctrl() { return this._ctrl;}
  get err() { return this.formErrorService; }
  protected get validators() { return this._validators }

  constructor(private formErrorService: FormErrorService) { }

  ngOnInit() {

    if(this.required === true) { this._validators.push(Validators.required); }

    this._ctrl = new FormControl('', this._validators)
    this.formMod.addControl(this.ctrlName, this._ctrl);
  }
}
