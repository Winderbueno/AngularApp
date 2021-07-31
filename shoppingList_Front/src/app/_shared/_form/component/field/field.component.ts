//#region Angular, Material, RxJS
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn, Validators } from '@angular/forms';
//#endregion

//#region App Component, Model, Service
import { FormErrorService } from '@app_form/service/form-error.service';
//#endregion


@Component({
  selector: 'app-field',
  template: ``,
})
export class FieldComponent implements OnInit {

  // Input
  @Input() formMod!: FormGroup;
  @Input() ctrlName!: string;
  @Input() label!: string;

  _validators: ValidatorFn[] = [Validators.required];
  _ctrl!: FormControl;

  // Getter
  get err() { return this.formErrorService; }

  constructor(private formErrorService: FormErrorService) { }

  ngOnInit() {
    this._ctrl = new FormControl('', this._validators)
    this.formMod.addControl(this.ctrlName, this._ctrl);
  }
}
