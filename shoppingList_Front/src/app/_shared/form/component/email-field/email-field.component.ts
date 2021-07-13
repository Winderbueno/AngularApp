//#region Angular, Material, RxJS
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//#endregion

//#region App Component, Model, Service
import { FormErrorService } from '@app/_shared/form/service/form-error.service';
//#endregion

/**
 * Email Field Component
 * TODO - Comment
 *  @param formToModify - the formGroup to add the fields on
 */
@Component({
  selector: 'app-field-email',
  templateUrl: 'email-field.component.html' })
export class EmailFieldComponent implements OnInit {

  @Input() formToModify!: FormGroup;

  emailCtrl: FormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);


  // Getters
  get err() { return this.formErrorService; }

  constructor(private formErrorService: FormErrorService) { }

  ngOnInit() {
    this.formToModify.addControl('email', this.emailCtrl);
  }
}
