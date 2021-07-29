//#region Angular, Material, RxJS
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
//#endregion

//#region App Component, Model, Service
import { FormErrorService } from '@app_form/service/form-error.service';
//#endregion


/**
 * Input Field Component
 *  @param formToModify - FormGroup to add the FormControl on
 *  @param name - Name of the Control (and Field Label)
 */
@Component({
  selector: 'app-input-field',
  templateUrl: 'input-field.component.html' })
export class InputFieldComponent implements OnInit {

  @Input() formMod!: FormGroup;
  @Input() ctrlName!: string;
  @Input() label!: string;

  _validators: ValidatorFn[] = [Validators.required];
  _ctrl!: FormControl;

  // Getters
  get err() { return this.formErrorService; }

  constructor(private formErrorService: FormErrorService) { }

  ngOnInit() {
    if(this.ctrlName === 'Email') { this._validators.push(Validators.email); }

    this._ctrl = new FormControl('', this._validators)
    this.formMod.addControl(this.ctrlName, this._ctrl);
  }
}
