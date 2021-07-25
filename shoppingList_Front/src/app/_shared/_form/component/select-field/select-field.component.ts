//#region Angular, Material, RxJS
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//#endregion

//#region App Component, Model, Service
import { Enum } from '@app_shared/enum/enum.model';
import { FormErrorService } from '@app_form/service/form-error.service';
//#endregion


/**
 * Select Field Component
 *  @param formToModify - FormGroup to add the FormControl on
 *  @param name - Name of the Control (and Field Label)
 *  @param enum - Values proposed in the select field
 */
@Component({
  selector: 'app-select-field',
  templateUrl: 'select-field.component.html' })
export class SelectFieldComponent implements OnInit {

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
