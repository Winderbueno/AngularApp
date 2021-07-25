//#region Angular, Material, RxJS
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//#endregion

//#region App Component, Model, Service
import { Enum } from '@app_shared/enum/enum.model';
import { FormErrorService } from '@app_form/service/form-error.service';
//#endregion

/**
 * TODO - Email Field Component
 *  @param formToModify - FormGroup to add the FormControl on
 */
@Component({
  selector: 'app-select-field',
  templateUrl: 'select-type-field.component.html' })
export class SelectTypeFieldComponent implements OnInit {

  @Input() formToModify!: FormGroup;

  @Input() name!: string;
  @Input() enum!: Enum;

  ctrl: FormControl = new FormControl('', [Validators.required]);

  // Getters
  get err() { return this.formErrorService; }

  constructor(private formErrorService: FormErrorService) { }

  ngOnInit() {
    this.formToModify.addControl(this.name, this.ctrl);
  }
}
