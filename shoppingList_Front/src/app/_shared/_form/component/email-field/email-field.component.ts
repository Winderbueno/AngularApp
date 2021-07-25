//#region Angular, Material, RxJS
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//#endregion

//#region App Component, Model, Service
import { FormErrorService } from '@app_form/service/form-error.service';
//#endregion

/**
 * Email Field Component
 *  @param formToModify - FormGroup to add the FormControl on
 */
@Component({
  selector: 'app-field-email',
  templateUrl: 'email-field.component.html' })
export class EmailFieldComponent implements OnInit {

  @Input() formToModify!: FormGroup;

  emailCtrl: FormControl = new FormControl('', [Validators.required, Validators.email]);

  // Getters
  get err() { return this.formErrorService; }

  constructor(private formErrorService: FormErrorService) { }

  ngOnInit() {
    this.formToModify.addControl('email', this.emailCtrl);
  }
}
